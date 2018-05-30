import React from 'react'
import PropTypes from 'prop-types'

const MainContentComponent = ({value= {}, options= [], isHeader = false}) => (
  <tr>
    {isHeader
      ? options.map((option,i) =>  <th scope="col" key={i}>{option.header}</th>)
      : options.map((option, i) => <td key={i}>{
        option.callback
        ? option.callback(value[option.key])
        : value[option.key] 
      }</td>)
    }     
  </tr>
)

MainContentComponent.propTypes = {
  options : PropTypes.array.isRequired,
  value : PropTypes.object,
  isHeader : PropTypes.bool
}

export default MainContentComponent