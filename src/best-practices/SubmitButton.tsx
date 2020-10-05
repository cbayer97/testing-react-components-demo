import React, { useState } from 'react'

type SubmitState = 'not submitted' | 'pending' | 'submitted' | 'error while submitting'

interface SubmitButtonProps {
  handleSubmit: () => Promise<void>
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ handleSubmit }) => {
  const [submitState, setSubmitState] = useState<SubmitState>('not submitted')

  const onSubmit = () => {
    setSubmitState('pending')
    handleSubmit()
      .then(() => setSubmitState('submitted'))
      .catch(() => setSubmitState('error while submitting'))
  }

  return (
    <>
      <span>{submitState}</span>
      <button onClick={onSubmit}>Submit</button>
    </>
  )
}
