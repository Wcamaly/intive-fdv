jest.unmock('../TableComponent')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import TableComponent from '../TableComponent'
import RowTable from '../RowTable'

Enzyme.configure({ adapter: new Adapter() })

const items =[{
  test: "Test"
}]

const options = [{
  header: "Test",
  key:"test",
  callback: value => (<span className="text-capitalize">{value}</span>)
}]

describe('<TableComponent />', () => {

  it('renders a TableComponent', () => {
    const wrapper = shallow(<TableComponent  items={items} options={options}/>)
    expect(wrapper.find(RowTable).length).toBe(2)
    expect(wrapper.find(RowTable).get(0).props.isHeader).toBe(true)
    expect(wrapper.find(RowTable).get(1).props.isHeader).toBe(undefined)
  })
  
});