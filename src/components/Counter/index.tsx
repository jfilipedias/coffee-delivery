import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  count: number
  minAmount?: number
  onCountChange: (value: number) => void
}

export function Counter({ count, onCountChange, minAmount = 0 }: CounterProps) {
  const isDecreaseButtonDisabled = count <= minAmount

  function handleDecrement() {
    if (count > minAmount) {
      onCountChange(count - 1)
    }
  }

  function handleIncrement() {
    onCountChange(count + 1)
  }

  function handleCountInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newCountValue = event.target.value
      ? parseInt(event.target.value, 10)
      : 0

    if (newCountValue >= minAmount) {
      onCountChange(newCountValue)
    }
  }

  return (
    <CounterContainer>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={isDecreaseButtonDisabled}
      >
        <Minus size={14} />
      </button>

      <input
        type="number"
        placeholder="0"
        value={count.toString()}
        onChange={handleCountInputChange}
      />

      <button type="button" onClick={handleIncrement}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
