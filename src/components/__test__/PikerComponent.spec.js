jest.unmock('../PikerComponent')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import PikerComponent from '../PikerComponent'

Enzyme.configure({ adapter: new Adapter() })

const options = [
  "test1",
  "test2"]

const onChange = jest.fn()


describe('<PikerComponent />', () => {

  it('renders a PikerComponent', () => {
    const wrapper = shallow(<PikerComponent options={options} label= "Test" onChange= {onChange} nameInput="test"/>)
   
    expect(wrapper.find('label').contains( <label htmlFor="test">Test</label>)).toBe(true)
    const complexComponents = wrapper.find('option').length
    expect(complexComponents).toBe(3)
    expect(wrapper.find('select').childAt(0).type()).toBe('option') 
    wrapper.find('select').simulate('change',  {target :{ value : 'test'}});
    expect(onChange).toHaveBeenCalled();
  })
  
});