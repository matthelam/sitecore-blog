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
    <div className="font-sans text-sm text-gray-700 dark:text-gray-300">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <label htmlFor={sliderId} className="font-medium text-gray-900 dark:text-gray-100">
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
          className="w-40 accent-gray-700 dark:accent-gray-300"
        />
        <span className="tabular-nums">
          {quantity} × {aud(unitPriceAud)} ={' '}
          <strong className="text-gray-900 dark:text-gray-100">{aud(total)}</strong>
        </span>
      </div>

      <div className="relative mt-8 mb-2" aria-hidden="true">
        <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800" />
        <div
          className={`absolute top-0 left-0 h-3 rounded-full transition-[width] duration-300 motion-reduce:transition-none ${
            within ? 'bg-gray-500 dark:bg-gray-400' : 'bg-red-600 dark:bg-red-500'
          }`}
          style={{ width: position(total) }}
        />
        <div
          className="absolute -top-2 h-7 w-0.5 bg-gray-900 dark:bg-gray-100"
          style={{ left: position(ceilingAud) }}
        />
        <span
          className="absolute -top-7 -translate-x-1/2 text-xs whitespace-nowrap text-gray-900 dark:text-gray-100"
          style={{ left: position(ceilingAud) }}
        >
          Mandate ceiling {aud(ceilingAud)}
        </span>
      </div>

      <p
        className={`mt-4 font-medium ${within ? 'text-gray-900 dark:text-gray-100' : 'text-red-700 dark:text-red-400'}`}
        aria-live="polite"
      >
        {within
          ? `✓ Within ${mandateId}. The checkout proceeds and charges ${aud(total)}.`
          : `✕ Over ${mandateId}. The gateway refuses the cart and returns what the agent can do instead.`}
      </p>

      <p className="mt-4 mb-1 text-xs tracking-wide text-gray-500 dark:text-gray-400">
        Gateway response
      </p>
      <pre className="overflow-x-auto rounded-md bg-gray-50 p-3 text-xs leading-relaxed text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        <code>{gatewayResponse(total, ceilingAud)}</code>
      </pre>
    </div>
  )
}

export default MandateCheckout
