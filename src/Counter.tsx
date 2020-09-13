import React, { useEffect, useState } from 'react'

export const Counter: React.FC = () => {
  const [value, setValue] = useState(0)
  const decrementValue = () => setValue((value) => --value)
  const incrementValue = () => setValue((value) => ++value)
  const saveValue = () => localStorage.setItem('value', value.toString())

  useEffect(() => {
    const valueFromStorage = localStorage.getItem('value')
    valueFromStorage && setValue(+valueFromStorage)
  }, [])

  return (
    <div>
      <div>{value}</div>
      <button onClick={decrementValue}>-</button>
      <button onClick={incrementValue}>+</button>
      <button onClick={saveValue}>Save</button>
    </div>
  )
}
