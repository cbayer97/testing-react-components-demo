import React, { ChangeEvent, useState } from 'react'

export const NameInput: React.FC = () => {
  const [value, setValue] = useState('')

  if (value.length === 7) {
    throw new Error('Oops, something went wrong')
  }

  const onChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const inputValue = changeEvent.target.value
    console.log('Changed input value to: ' + inputValue)
    setValue(inputValue)
  }

  return (
    <label>
      Name: <input value={value} onChange={onChange} />
    </label>
  )
}
