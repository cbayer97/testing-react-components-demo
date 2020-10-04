import React, { useEffect, useState } from 'react'

export const DebouncedButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000)
  }, [])

  return isVisible ? <button>Debounced Button</button> : null
}
