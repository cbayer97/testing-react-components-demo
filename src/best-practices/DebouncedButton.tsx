import React, { useEffect, useState } from 'react'

export const DebouncedButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500)
  }, [])

  return isVisible ? (
    <button onClick={() => console.log('Button Click')}>Debounced Button</button>
  ) : null
}
