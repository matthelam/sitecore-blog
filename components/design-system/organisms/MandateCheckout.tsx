'use client'

import { useId, useState } from 'react'

type MandateCheckoutProps = {
  mandateId: string
  ceilingAud: number
  unitPriceAud: number
  itemLabel: string
  maxQuantity: number
}

const aud = (amount: number) => `A$${amount}`

// Organism: cart total against an agent's spending mandate. Red appears only for the
// over_mandate rejection (a genuinely negative state), always with the cross and words.

// Mirrors the gateway responses quoted in the post: the dry-run fields when the cart is within
// the mandate, and the over_mandate rejection when it is not.
const gatewayResponse = (total: number, ceiling: number) =>
  total <= ceiling
    ? `{\n  "within_mandate": true,\n  "would_charge": "${aud(total)}"\n}`
    : `{\n  "result": "REJECTED",\n  "error_code": "over_mandate",\n  "cart_total_aud": ${total.toFixed(1)},\n  "mandate_ceiling_aud": ${ceiling.toFixed(1)},\n  "permitted_actions": [\n    "remove_item",\n    "request_mandate_increase"\n  ]\n}`

const MandateCheckout = ({
  mandateId,
  ceilingAud,
  unitPriceAud,
  itemLabel,
  maxQuantity,
}: MandateCheckoutProps) => {
  const [quantity, setQuantity] = useState(1)
  const sliderId = useId()
  const total = quantity * unitPriceAud
  const within = total <= ceilingAud
  const scaleMax = unitPriceAud * maxQuantity
  const position = (amount: number) => `${Math.min(100, (amount / scaleMax) * 100)}%`

  return (
    <div className="text-ds-ink-muted font-sans text-sm">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <label htmlFor={sliderId} className="text-ds-ink font-medium">
          Boxes in the cart
        </label>
        <input
          id={sliderId}
          type="range"
          min={1}
          max={maxQuantity}
          step={1}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          aria-valuetext={`${quantity} ${itemLabel}, ${aud(total)} total`}
          className="accent-ds-ink-muted w-40"
        />
        <span className="tabular-nums">
          {quantity} × {aud(unitPriceAud)} = <strong className="text-ds-ink">{aud(total)}</strong>
        </span>
      </div>

      <div className="relative mt-8 mb-2" aria-hidden="true">
        <div className="bg-ds-surface-muted h-3 w-full rounded-full" />
        <div
          className={`absolute top-0 left-0 h-3 rounded-full transition-[width] duration-300 motion-reduce:transition-none ${
            within ? 'bg-ds-ink-subtle' : 'bg-ds-negative-line'
          }`}
          style={{ width: position(total) }}
        />
        <div
          className="bg-ds-ink absolute -top-2 h-7 w-0.5"
          style={{ left: position(ceilingAud) }}
        />
        <span
          className="text-ds-ink absolute -top-7 -translate-x-1/2 text-xs whitespace-nowrap"
          style={{ left: position(ceilingAud) }}
        >
          Mandate ceiling {aud(ceilingAud)}
        </span>
      </div>

      <p
        className={`mt-4 font-medium ${within ? 'text-ds-ink' : 'text-ds-negative-ink'}`}
        aria-live="polite"
      >
        {within
          ? `✓ Within ${mandateId}. The checkout proceeds and charges ${aud(total)}.`
          : `✕ Over ${mandateId}. The gateway refuses the cart and returns what the agent can do instead.`}
      </p>

      <p className="text-ds-ink-subtle mt-4 mb-1 text-xs tracking-wide">Gateway response</p>
      <pre className="bg-ds-surface-muted text-ds-ink overflow-x-auto rounded-md p-3 text-xs leading-relaxed">
        <code>{gatewayResponse(total, ceilingAud)}</code>
      </pre>
    </div>
  )
}

export default MandateCheckout
