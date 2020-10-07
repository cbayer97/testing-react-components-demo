import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { NameInput } from './NameInput'
import userEvent from '@testing-library/user-event'
import { TranslatedButton } from './TranslatedButton'
import { RedButton } from './RedButton'
import { Button } from './Button'
import { SubmitButton } from './SubmitButton'

test('Use screen to access selectors', () => {
  const { getByText } = render(<div>SomeText</div>)

  expect(getByText('SomeText')).toBeInTheDocument()

  expect(screen.getByText('SomeText')).toBeInTheDocument()
})

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
  render(<TranslatedButton />)

  expect(screen.getByTestId('submit-button')).toBeInTheDocument()

  expect(screen.getByRole('button', { name: 'Submit Name' })).toBeInTheDocument()
})

test('Dont use snapshot tests', () => {
  const button = render(<RedButton />)
  expect(button).toMatchSnapshot()
})

test('Use jest-dom matchers', () => {
  render(<RedButton />)
  const disabledButton = screen.getByRole('button', { name: 'Red Button' })

  expect(disabledButton.disabled).toBeTruthy()
  expect(disabledButton).toBeDisabled()

  expect(disabledButton.innerHTML).toEqual('Red Button')
  expect(disabledButton).toHaveTextContent('Red Button')
})

test('Wait for elements to appear', async () => {
  render(<Button debounceTime={500}>Debounced Button</Button>)

  expect(screen.getByRole('button', { name: 'Debounced Button' })).toBeInTheDocument()
})

test('Dont perform side effects in waitFor', async () => {
  render(
    <>
      <Button debounceTime={500}>Button500</Button>
      <Button debounceTime={1000}>Button1000</Button>
    </>,
  )

  await waitFor(() => {
    userEvent.click(screen.getByRole('button', { name: 'Button500' }))
    expect(screen.getByRole('button', { name: 'Button1000' })).toBeInTheDocument()
  })
})

test('Dont put multiple assertions in a waitFor', async () => {
  render(
    <div id="dialog">
      <Button debounceTime={500}>End Meeting</Button>
      <Button debounceTime={500}>Leave Meeting</Button>
      <Button debounceTime={500}>Cancel</Button>
    </div>,
  )

  await waitFor(() => {
    expect(screen.getByRole('button', { name: 'End Meeting' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Leave Meeting' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  })
})

test('Dont wrap things in act unnecessarily', () => {
  const handleSubmit = jest.fn(() => Promise.resolve())
  render(<SubmitButton handleSubmit={handleSubmit} />)

  expect(screen.getByText('not submitted')).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Submit' }))

  expect(handleSubmit).toHaveBeenCalled()
})
