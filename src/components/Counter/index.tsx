import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  count: number
  onCountChange: (value: number) => void
}

export function Counter({ count, onCountChange }: CounterProps) {
  function handleDecrement() {
    if (count > 0) {
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

    if (newCountValue >= 0) {
      onCountChange(newCountValue)
    }
  }

  return (
    <CounterContainer>
      <button type="button" onClick={handleDecrement}>
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
