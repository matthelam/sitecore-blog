/** Renders one or more schema.org JSON-LD objects as ld+json script tags. */
export default function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // "<" is escaped so a value can never close the script tag early.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\u003c') }}
        />
      ))}
    </>
  )
}
