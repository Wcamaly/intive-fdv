import React from 'react'
import PropTypes from 'prop-types'

const InputSearch = ({ type, label, placeholder ,onChange, nameInput}) => (
  
  <div className="form-group">
    <label htmlFor={label.toLowerCase()}>{label}</label>
    <input 
      onChange={e => onChange(e.target.value, nameInput)} 
      placeholder={placeholder} 
      type={type} 
      className="form-control"
      id={label} 
      name={nameInput}
    />
  </div>
)

InputSearch.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  nameInput: PropTypes.string.isRequired,
  placeholder: PropTypes.string
  
}

export default InputSearch
