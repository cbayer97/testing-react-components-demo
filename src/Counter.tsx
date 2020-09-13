import React, { Component, useEffect, useState } from 'react'

export const CounterFC: React.FC = () => {
  const [count, setCount] = useState(0)
  const decrementCount = () => setCount((value) => value - 1)
  const incrementCount = () => setCount((value) => value + 1)
  const saveCount = () => localStorage.setItem('count', count.toString())

  useEffect(() => {
    const countFromStorage = localStorage.getItem('count')
    countFromStorage && setCount(+countFromStorage)
  }, [])

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <button onClick={saveCount}>Save</button>
    </div>
  )
}

export class CounterCC extends Component {
  state = { count: [0] }
  decrementCount = () =>
    this.setState((prevState: { count: number[] }) => ({
      count: [prevState.count[0] - 1],
    }))
  incrementCount = () =>
    this.setState((prevState: { count: number[] }) => ({
      count: [prevState.count[0] + 1],
    }))
  saveCount = () => localStorage.setItem('count', this.state.count[0].toString())

  componentDidMount = () => {
    const countFromStorage = localStorage.getItem('count')
    countFromStorage && this.setState(() => ({ count: [+countFromStorage] }))
  }

  render = () => (
    <div>
      <div>{this.state.count[0]}</div>
      <button onClick={this.decrementCount}>-</button>
      <button onClick={this.incrementCount}>+</button>
      <button onClick={this.saveCount}>Save</button>
    </div>
  )
}
