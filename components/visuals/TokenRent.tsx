'use client'

import { useId, useState } from 'react'

type TokenRentProps = {
  redundantTokens: number
  redundantMax: number
  invocations: number
  invocationSteps: number[]
}

const formatCount = (value: number) => value.toLocaleString('en-AU')

const TokenRent = ({
  redundantTokens,
  redundantMax,
  invocations,
  invocationSteps,
}: TokenRentProps) => {
  const [redundant, setRedundant] = useState(redundantTokens)
  const [stepIndex, setStepIndex] = useState(Math.max(0, invocationSteps.indexOf(invocations)))
  const redundantId = useId()
  const callsId = useId()
  const calls = invocationSteps[stepIndex]
  const wasted = redundant * calls

  return (
    <div className="font-sans text-sm text-gray-700 dark:text-gray-300">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={redundantId} className="font-medium text-gray-900 dark:text-gray-100">
            Redundant tokens in the context
          </label>
          <input
            id={redundantId}
            type="range"
            min={0}
            max={redundantMax}
            step={10}
            value={redundant}
            onChange={(event) => setRedundant(Number(event.target.value))}
            className="mt-2 block w-full accent-gray-700 dark:accent-gray-300"
          />
          <p className="mt-1 tabular-nums">{formatCount(redundant)} tokens</p>
        </div>
        <div>
          <label htmlFor={callsId} className="font-medium text-gray-900 dark:text-gray-100">
            Invocations
          </label>
          <input
            id={callsId}
            type="range"
            min={0}
            max={invocationSteps.length - 1}
            step={1}
            value={stepIndex}
            onChange={(event) => setStepIndex(Number(event.target.value))}
            aria-valuetext={`${formatCount(calls)} invocations`}
            className="mt-2 block w-full accent-gray-700 dark:accent-gray-300"
          />
          <p className="mt-1 tabular-nums">{formatCount(calls)} calls</p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-700" aria-live="polite">
        <p className="text-3xl font-semibold text-gray-900 tabular-nums dark:text-gray-100">
          {formatCount(wasted)}
          <span className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
            tokens paid for nothing
          </span>
        </p>
        <p className="mt-2 leading-relaxed">
          {formatCount(redundant)} redundant tokens × {formatCount(calls)} invocations, plus the
          attention dilution on each of those {formatCount(calls)} calls.
        </p>
      </div>
    </div>
  )
}

export default TokenRent
