import json, re, os, subprocess, sys, threading
from concurrent.futures import ThreadPoolExecutor
evals, out, skill, runs = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4])
env = {k: v for k, v in os.environ.items() if k != "CLAUDECODE"}

def one(query):
    p = subprocess.Popen(["claude", "-p", query, "--output-format", "stream-json", "--verbose",
                          "--permission-mode", "plan"], stdout=subprocess.PIPE,
                         stderr=subprocess.DEVNULL, env=env)
    timer = threading.Timer(240, p.kill); timer.start()
    skills, tools = [], 0
    try:
        for line in p.stdout:
            try: ev = json.loads(line)
            except ValueError: continue
            if ev.get("type") != "assistant": continue
            for c in ev["message"].get("content", []):
                if c.get("type") != "tool_use": continue
                tools += 1
                if c["name"] == "Skill": skills.append(c["input"].get("skill", ""))
                fp = str(c["input"].get("file_path", "")).replace("\\", "/")
                m = re.search(r"/skills/([\w-]+)/SKILL\.md", fp)
                if c["name"] == "Read" and m: skills.append(m.group(1))
            if skills or tools >= 5: break
    finally:
        timer.cancel()
        if p.poll() is None: p.kill()
        p.wait()
    return skills

cases = json.load(open(evals))
jobs = [(i, c["query"]) for i, c in enumerate(cases) for _ in range(runs)]
with ThreadPoolExecutor(6) as ex:
    res = list(ex.map(lambda j: (j[0], one(j[1])), jobs))
results = []
for i, c in enumerate(cases):
    got = [s for k, s in res if k == i]
    hits = sum(any(x.endswith(skill) for x in s) for s in got)
    other = sorted({x for s in got for x in s if not x.endswith(skill)})
    ok = hits >= (runs + 1) // 2 if c["should_trigger"] else hits == 0
    results.append({"query": c["query"], "should_trigger": c["should_trigger"], "hits": hits,
                    "other_skills": other, "pass": ok})
    print(("PASS" if ok else "FAIL"), hits, other, c["query"][:70], flush=True)
json.dump(results, open(out, "w"), indent=2)
print(sum(r["pass"] for r in results), "/", len(results))
