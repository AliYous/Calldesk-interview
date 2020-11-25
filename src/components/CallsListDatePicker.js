import React, { useContext, useState } from 'react';
import {CallsContext} from '../context/CallsContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function CallsListDatePicker() {
  const {from, to, setFromState, setToState} = useContext(CallsContext)
  const [startDate, setStartDate] = useState(() => new Date(from));
  const [endDate, setEndDate] = useState(() => new Date(to));
  
  const dateToTimestamp = (date) => {
    return date.getTime();
  }

  const handleFromDateChange = newFromdate => {
    setStartDate(newFromdate);
    const fromTimestamp = dateToTimestamp(newFromdate);  
    setFromState(fromTimestamp);
  }
  const handleToDateChange = newTodate => {
    setEndDate(newTodate);
    const toTimestamp = dateToTimestamp(newTodate);
    setToState(toTimestamp);
  }

  return (
    <div className="callsListDatePicker">
      <h5>Pick date range :</h5>
      <div className="callsListDatePicker_row">
        <DatePicker 
          className="callsListDatePicker_datePicker"
          selected={startDate} 
          placeholderText="From"
          dateFormat="dd/MM/yyyy"
          onChange={newFromdate => handleFromDateChange(newFromdate)} 
          maxDate={new Date()}
        />
        <DatePicker 
          className="callsListDatePicker_datePicker"
          selected={endDate} 
          placeholderText="To"
          dateFormat="dd/MM/yyyy"
          onChange={newTodate => handleToDateChange(newTodate)} 
          maxDate={new Date()}
        />
      </div>
    </div>
  )
}

export default CallsListDatePicker
