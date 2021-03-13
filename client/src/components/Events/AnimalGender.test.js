import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { findByTestAttr, checkProps } from './../../../utils/testUtils'
import AnimalGender from './AnimalGender'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => {
  const component = shallow(<AnimalGender {...props} />)
  return component
}

describe('AnimalGender component', () => {
  describe('Checking render', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        gender: () => {}
      }
      wrapper = setUp(props)
    })

    it('Should render component', () => {
      const component = findByTestAttr(wrapper, 'animalGender')
      expect(component.length).toBe(1)
    })
  })

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = () => {}
      const propsErr = checkProps(AnimalGender, expectedProps)
      expect(propsErr).toBeUndefined
    })
  })
})
