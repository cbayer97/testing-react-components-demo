import React, { ChangeEvent, useEffect, useState } from 'react'

export const DebouncedInput: React.FC = () => {
  const [value, setValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  const onChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    let inputValue = changeEvent.target.value
    console.log(inputValue)
    setValue(inputValue)
  }

  useEffect(() => {
    setTimeout(() => setDebouncedValue(value), 500)
  }, [value, setDebouncedValue])

  return (
    <>
      <label>
        Debounced Value Input:
        <input onChange={onChange} value={value} />
      </label>
      Debounced Value: <span>{debouncedValue}</span>
    </>
  )
}
