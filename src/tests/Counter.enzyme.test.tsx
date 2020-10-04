import React from 'react'
import { CounterCC } from '../Counter'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Counter Enzyme', () => {
  const wrapper = shallow(<CounterCC />)
  wrapper.instance().state = { count: [3] }

  expect(wrapper.state('count')).toEqual([3])
  wrapper.instance().incrementCount()
  wrapper.instance().incrementCount()

  expect(wrapper.state('count')).toEqual([5])

  wrapper.instance().decrementCount()
  wrapper.instance().saveCount()

  expect(localStorage.setItem).toHaveBeenCalledWith('count', '4')
})
