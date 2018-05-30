jest.unmock('../MainContentComponent')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MainContentComponent from '../MainContentComponent'
import TableComponent from '../TableComponent'

Enzyme.configure({ adapter: new Adapter() })

const items =[{
  test: "Test"
}]


describe('<MainContentComponent />', () => {

  it('renders a MainContentComponent', () => {
    const wrapper = shallow(<MainContentComponent  items={items}/>)
    expect(wrapper.find(TableComponent).length).toBe(1)
  })
  
});