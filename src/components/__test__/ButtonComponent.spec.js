jest.unmock('../ButtonComponent')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import ButtonComponent from '../ButtonComponent'

Enzyme.configure({ adapter: new Adapter() })

const onClick = jest.fn()
const setFilter = jest.fn()


describe('<ButtonComponent />', () => {

  it('renders a ButtonComponent', () => {
    const wrapper = shallow(<ButtonComponent setFilter={setFilter} className="test"  onClick={onClick}>{"Test"}</ButtonComponent>)
    expect(wrapper.find('button').prop('children')).toBe('Test')
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').prop('className')).toBe('test') 
    wrapper.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
    expect(setFilter).toHaveBeenCalled()
  })
  
});