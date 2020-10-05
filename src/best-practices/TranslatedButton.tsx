import React from 'react'

export const TranslatedButton: React.FC = () => {
  const translateMe = (_key: string) => 'Submit Name'
  return (
    <div style={{ border: '1px solid black', cursor: 'pointer' }} data-testid="submit-button">
      {translateMe('submit')}
    </div>
  )
}
