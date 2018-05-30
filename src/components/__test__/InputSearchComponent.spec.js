jest.unmock('../InputSearchComponet')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import InputSearchComponet from '../InputSearchComponet'

Enzyme.configure({ adapter: new Adapter() })

const options = [
  "test1",
  "test2"]

const onChange = jest.fn()


describe('<InputSearchComponet />', () => {

  it('renders a InputSearchComponet', () => {
    const wrapper = shallow(<InputSearchComponet onChange = {onChange} label="Test" nameInput="test" placeholder="Test" type="text"/>)
   
    expect(wrapper.find('label').contains( <label htmlFor="test">Test</label>)).toBe(true)
    const complexComponents = wrapper.find('input').length
    expect(complexComponents).toBe(1)
    expect(wrapper.find('input').get(0).props.type).toBe('text') 
    wrapper.find('input').simulate('change',  {target :{ value : 'test'}})
    expect(onChange).toHaveBeenCalled()
  })
  
});