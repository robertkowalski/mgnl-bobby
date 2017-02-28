import React from 'react'
import ReactDOM from 'react-dom'

import Picky from './calendar.js'
import SelectField from './select.js'

ReactDOM.render(
  <div>
    <div>Hello, I'm Bobby, a React Component. Hello Topher!</div>
    <br/>
    <br/>
    <SelectField />
    <br/>
    <br/>
    <Picky />
  </div>,
  document.getElementById('app')
)
