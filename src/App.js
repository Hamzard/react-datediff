import React, { Component } from 'react'
import './App.css'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
// datepicker component
import { DateRangePicker } from 'react-dates'
// function that calculates difference in days
import { dateDiffInDays } from './dateDiff'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      count: null
    };
  }

  handleClick() {
    var diff = dateDiffInDays(this.state.startDate, this.state.endDate)
    this.setState({
      count: 'Timespan: '+ diff + ' day(s)'
    })
  }

  render() {
    return (
      <div className="App">
        <label>Select a start and end date</label><br/>
        <div className="inputs">
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="start_date_id"
            endDate={this.state.endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
            isOutsideRange={() => false}
            showClearDates={true}
          />
          <button onClick={this.handleClick.bind(this)} disabled={!(this.state.startDate && this.state.endDate)}>Count days</button>
        </div>
        <p>{this.state.count} </p>
      </div>
    );
  }
}

export default App;
