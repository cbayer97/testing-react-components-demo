import React from 'react'
import { render, screen } from '@testing-library/react'
import { CounterCC } from '../Counter'
import userEvent from '@testing-library/user-event'

test('Counter RTL', () => {
  (localStorage.getItem as jest.Mock).mockReturnValueOnce('3')
  render(<CounterCC />)

  expect(screen.getByText('3')).toBeInTheDocument()
  userEvent.click(screen.getByRole('button', { name: '+' }))
  userEvent.click(screen.getByRole('button', { name: '+' }))

  expect(screen.getByText('5')).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: '-' }))
  userEvent.click(screen.getByRole('button', { name: 'Save' }))

  expect(localStorage.setItem).toHaveBeenCalledWith('count', '4')
})
