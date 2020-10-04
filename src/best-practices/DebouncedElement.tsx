import React, { useEffect, useState } from 'react'

export const DebouncedElement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000)
  }, [])

  return isVisible ? (
    <div>I appear after 1 second</div>
  ) : null
}
