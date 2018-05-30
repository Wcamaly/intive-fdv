jest.unmock('../RowTable')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import RowTable from '../RowTable'

Enzyme.configure({ adapter: new Adapter() })

const item = {
  test: "Test"
}
const options = [{
  header: "Test",
  key:"test",
  callback: value => (<span className="text-capitalize">{value}</span>)
}]


describe('<RowTable />', () => {

  it('renders a header', () => {
    const wrapper = shallow(<RowTable isHeader={true} options={options}  />)
   
    expect(wrapper.contains(<th scope="col" key="0" >Test</th>)).toBe(true)
  })

  it('renders a Item', () => {
    const wrapper = shallow(<RowTable value={item} options={options}  />)

    expect(wrapper.contains(<td key="0"><span className="text-capitalize">Test</span></td>)).toBe(true);
  });
  
});