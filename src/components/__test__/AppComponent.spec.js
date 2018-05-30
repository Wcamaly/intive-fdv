jest.unmock('../AppComponent')

import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import AppComponent from '../AppComponent'
import MainContentContainer from '../../containers/MainContentContainer'
import HeaderContainer from '../../containers/HeaderContainer'

Enzyme.configure({ adapter: new Adapter() })

const items =[{
  test: "Test"
}]

const getPlayers = jest.fn()
const getPlayersNot = jest.fn()

describe('<AppComponent />', () => {

  it('renders a AppComponent isFetching', () => {
    const wrapper = shallow(<AppComponent  isFetching={true} getPlayers={getPlayers}/>)
    expect(wrapper.find(HeaderContainer).length).toBe(1)
    expect(wrapper.contains(<div className="loader">&nbsp;</div>)).toBe(true)
    expect(wrapper.find(MainContentContainer).length).toBe(0)
    expect(getPlayers).toHaveBeenCalled()
  })


  it('renders a AppComponent isFetching -- false', () => {
    const component = shallow(<AppComponent  isFetching={false} getPlayers={getPlayersNot}/>)
    expect(component.find(HeaderContainer).length).toBe(1)
    expect(component.contains(<div className="loader">&nbsp;</div>)).toBe(false)
    expect(component.find(MainContentContainer).length).toBe(1)
    expect(getPlayersNot).not.toHaveBeenCalled()
  })
  
});