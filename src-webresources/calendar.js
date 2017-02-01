import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class Picky extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      date: null,
    }

    this.onDateChange = this.onDateChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDateChange(date) {
    this.setState({ date })
  }

  onFocusChange({ focused }) {
    this.setState({ focused })
  }

  render() {
    const { focused, date } = this.state

    return (
      <SingleDatePicker
        {...this.props}
        id="date_input"
        date={date}
        focused={focused}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}

export default Picky
