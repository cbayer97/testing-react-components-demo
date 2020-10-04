import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { NameInput } from './NameInput'
import userEvent from '@testing-library/user-event'
import { SubmitButton } from './SubmitButton'
import { DisabledButton } from './DisabledButton'
import { DebouncedInput } from './DebouncedInput'
import { DebouncedButton } from './DebouncedButton'

test('Use getBy* instead of queryBy* for an existing element', () => {
  render(<div>SomeText</div>)

  expect(screen.queryByText('SomeText')).toBeInTheDocument()

  expect(screen.getByText('SomeText')).toBeInTheDocument()
})

test('Use userEvent instead of fireEvent', () => {
  render(<NameInput />)
  const nameInput = screen.getByRole('textbox', { name: 'Name:' })

  fireEvent.change(nameInput, {
    target: { value: 'John Doe' },
  })

  userEvent.type(nameInput, 'John Doe')
})

test('Avoid redundant assertions', () => {
  render(<NameInput />)

  expect(screen.getByRole('textbox', { name: 'Name:' })).toBeInTheDocument()
  userEvent.type(screen.getByRole('textbox', { name: 'Name:' }), 'John')
})

test('Use queries accessible to everyone', () => {
  render(<SubmitButton />)

  expect(screen.getByTestId('submit-button')).toBeInTheDocument()

  expect(screen.getByRole('button', { name: 'Submit Name' })).toBeInTheDocument()
})

test('Dont use snapshot tests', () => {
  const submitButton = render(<SubmitButton />)
  expect(submitButton).toMatchSnapshot()
})

test('Use jest-dom matchers', () => {
  render(<DisabledButton />)
  const disabledButton = screen.getByRole('button', { name: 'Disabled Button' })

  expect(disabledButton.disabled).toBeTruthy()

  expect(disabledButton).toBeDisabled()
})

test('Wait for elements to appear', async () => {
  render(<DebouncedButton />)

  expect(screen.getByRole('button', { name: 'Debounced Button' })).toBeInTheDocument()
})

test('Async testing', async () => {
  render(<DebouncedInput />)
  const input = screen.getByRole('textbox', { name: 'Debounced Value Input:' })

  userEvent.type(input, 'Hello World!')

  await waitFor(() => {
    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
