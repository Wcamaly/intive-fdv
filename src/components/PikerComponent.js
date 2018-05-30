import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ label, onChange, options, nameInput }) => (
  <div className="form-group">
    <label htmlFor={label.toLowerCase()}>{label}</label>
    <select 
      placeholder="Selected..." 
      id={`${label.toLowerCase()}_${new Date().getTime()}`} 
      className="form-control" 
      onChange={e => onChange(e.target.value, nameInput)} 
      name={nameInput}>
      <option value="">Selected...</option>
      {options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>)
      }
    </select>
  </div>
)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  nameInput: PropTypes.string.isRequired
}

export default Picker
