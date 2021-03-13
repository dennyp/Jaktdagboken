import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalList from './AnimalList'
import { findByTestAttr } from '../../../utils/testUtils'

Enzyme.configure({ adapter: new Adapter() })

describe('AnimalList component', () => {
  it('Should render without errors', () => {
    const component = shallow(<AnimalList />)
    const wrapper = findByTestAttr(component, 'animalList')
    expect(wrapper.length).toBe(1)
  })
})
