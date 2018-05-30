import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RowTable from './RowTable'

class TableComponent extends Component {
  
  render () {
    const {items, options} = this.props

    return (
      <table className="table">
      <thead>
        <RowTable isHeader={true} options={options} />
      </thead>
      <tbody>
        {
          items.map((item,i) => <RowTable options={options} value={item} key={i} />)
        }
      </tbody>
    </table>
    )

  }

} 

TableComponent.propTypes = {
  items : PropTypes.array.isRequired,
  options : PropTypes.array.isRequired
}

export default TableComponent