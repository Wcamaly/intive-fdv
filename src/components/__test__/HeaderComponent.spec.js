jest.unmock('../HeaderComponent')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import HeaderComponent from '../HeaderComponent'
import InputSearchComponent from '../InputSearchComponet'
import FilterContainer from '../../containers/FilterContainer'
import PikerComponent from '../PikerComponent'

Enzyme.configure({ adapter: new Adapter() })

const onChange = jest.fn()


describe('<HeaderComponent />', () => {

  it('renders a HeaderComponent', () => {
    const wrapper = shallow(<HeaderComponent  changeFilter={onChange}/>)
    expect(wrapper.find(InputSearchComponent).length).toBe(2)
    expect(wrapper.find(FilterContainer).length).toBe(2)
    expect(wrapper.find(PikerComponent).length).toBe(1) 
    wrapper.find(PikerComponent).simulate('change',  {target :{ value : 'test'}});
    expect(onChange).toHaveBeenCalled();
  })
  
});