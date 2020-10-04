import React from 'react'

import { NameInput } from './NameInput'
import { SubmitButton } from './SubmitButton'
import { EnabledButton } from './EnabledButton'
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
    <EnabledButton />
    <br />
    <br />
    <br />
    <br />
    <br />
    <DebouncedButton />
  </>
)
