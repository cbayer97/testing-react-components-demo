import React, { useEffect, useState } from 'react'

interface ButtonProps {
  debounceTime: number
}

export const Button: React.FC<ButtonProps> = ({debounceTime, children}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), debounceTime)
  }, [])

  return isVisible ? (
    <button onClick={() => console.log('Button Click')}>{children}</button>
  ) : null
}
