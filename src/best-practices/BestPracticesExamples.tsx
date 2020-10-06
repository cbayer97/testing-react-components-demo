import React from 'react'

import { NameInput } from './NameInput'
import { TranslatedButton } from './TranslatedButton'
import { RedButton } from './RedButton'
import { Button } from './Button'

export const BestPracticesExamples: React.FC = () => (
  <>
    <NameInput />
    <TranslatedButton />
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
    <Button debounceTime={500}>Debounced Button</Button>
  </>
)
