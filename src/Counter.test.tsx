import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'

test('Counter', () => {
  (localStorage.getItem as jest.Mock).mockReturnValueOnce('3')
  render(<Counter />)

  expect(screen.getByText('3')).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: '+' }))
  fireEvent.click(screen.getByRole('button', { name: '+' }))

  expect(screen.getByText('5')).toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: '-' }))
  fireEvent.click(screen.getByRole('button', { name: 'Save' }))

  expect(localStorage.setItem).toHaveBeenCalledWith('value', '4')
})
