import React from 'react'

import { NameInput } from './NameInput'
import { SubmitButton } from './SubmitButton'
import { DisabledButton } from './DisabledButton'
import { DebouncedInput } from './DebouncedInput'
import { DebouncedButton } from './DebouncedButton'

export const App: React.FC = () => (
  <>
    <NameInput />
    <SubmitButton />
    <br />
    <br />
    <br />
    <br />
    <br />
    <DisabledButton />
    <br />
    <br />
    <br />
    <br />
    <br />
    <DebouncedButton />
    <br />
    <br />
    <br />
    <br />
    <br />
    <DebouncedInput />
  </>
)
