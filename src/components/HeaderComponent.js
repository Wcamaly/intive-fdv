import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SHOW_NAME, SHOW_POSITION, SHOW_AGE, SHOW_FILTER, SHOW_ALL } from '../constants/constants'
import PikerComponent from './PikerComponent'
import InputSerchComponent from './InputSearchComponet'
import FilterContainer from '../containers/FilterContainer'
import {POSITIONS} from '../constants/constants'


 

class HeaderComponent extends Component {


  getListFilters () {
    return {
      [SHOW_FILTER]: {
        className: "btn-primary ",
        label:'Filter'},
        [SHOW_ALL]: {
        className: "btn-danger ",
        label:'X',
        callback: this.clear
      }
    }
  }

  render() {
    const {changeFilter} = this.props
    return (
      <div className="row">
          <div className="col-xs-3">
            <InputSerchComponent 
              onChange = {changeFilter}
              label="Name"
              nameInput={SHOW_NAME}
              placeholder="Name"
              type="text"
             />
          </div>
          <div className="col-xs-3">
            <PikerComponent 
              options={POSITIONS}  
              label= "Position"
              onChange= {changeFilter}
              nameInput={SHOW_POSITION}
      
            />
          </div>
          <div className="col-xs-3">
            <InputSerchComponent 
              onChange = {changeFilter}
              label="Age"
              nameInput={SHOW_AGE}
              placeholder="Age"
              type="number"
            />
          </div>
          <div className="col-xs-3">
            <div className="form-group">
              <label className="col-xs-12"> &nbsp;</label>
              <div className="btn-group">
              {Object.keys(this.getListFilters()).map(filter =>
                <FilterContainer filter={filter} key={filter} className={` btn ${this.getListFilters()[filter].className}`} onClick={this.getListFilters()[filter].callback}>
                  {this.getListFilters()[filter].label}
                </FilterContainer>
              )}
              </div>
            </div>
          </div>
      </div>
    )
  }

}

HeaderComponent.propTypes = {
  changeFilter: PropTypes.func.isRequired
}

export default HeaderComponent