import React, { useContext, useState } from 'react';
import {CallsContext} from '../context/CallsContext';


function CallsListDatePicker() {
  const {from, to, setFromState, setToState} = useContext(CallsContext)
  const [startDate, setStartDate] = useState(() => new Date(from).toLocaleDateString().substring(0,10));
  const [endDate, setEndDate] = useState(() => new Date(from).toLocaleDateString().substring(0,10));
  const [focus, setFocus] = useState(false);


  return (
    <div>
      
    </div>
  )
}

export default CallsListDatePicker
