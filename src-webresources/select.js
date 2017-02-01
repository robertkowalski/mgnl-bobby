import React from 'react'
import ReactDOM from 'react-dom'

import Select from 'react-select'

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css'

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
]

function logChange (val) {
  alert("Selected: " + JSON.stringify(val))
}

const SelectField = () => {
  return (
    <Select
      name="form-field-name"
      value="one"
      options={options}
      onChange={logChange}
    />
  )
}

export default SelectField
