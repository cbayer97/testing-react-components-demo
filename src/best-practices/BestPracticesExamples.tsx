import React from 'react'

import { NameInput } from './NameInput'
import { SubmitButton } from './SubmitButton'
import { RedButton } from './RedButton'
import { DebouncedButton } from './DebouncedButton'
import { DebouncedElement } from './DebouncedElement'

export const BestPracticesExamples: React.FC = () => (
  <>
    <NameInput />
    <SubmitButton />
    <br />
    <br />
    <br />
    <br />
    <br />
    <RedButton />
    <br />
    <br />
    <br />
    <br />
    <br />
    <DebouncedButton />
    <DebouncedElement />
  </>
)
