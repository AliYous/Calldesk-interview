import React, { createContext, useEffect, useState } from 'react'
import { axios } from '../axios';


export const CallsContext = createContext();

export const CallsContextProvider = ({children}) => {
  const [loading, setLoadingState] = useState('false');
  const [botId, setBotIdState] = useState('bot1');
  const [from, setFromState] = useState(1590962400000);
  const [to, setToState] = useState(1593554399000);
  const [calls, setCallsState] = useState([]);
  const [callsCounter, setCallsCounterState] = useState(0);

  useEffect(() => {
    setLoadingState(true);
    console.log('axios call STARTED from context')
    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls?from=${from}&to=${to}` 
    ).then(res => {
          setCallsState(res.data.payload.calls)
          setCallsCounterState(res.data.payload.count);
          setLoadingState(false);
      }
      )
    .catch(err => {
      setLoadingState(false);
      console.log(err);
    })
  }, [from, to, botId]);

  const callsContext = {
    loading,
    botId,
    setBotIdState,
    setLoadingState,
    from,
    setFromState,
    to,
    setToState,
    calls,
    setCallsState,
    callsCounter,
    setCallsCounterState,
  }
  
  return (
    <CallsContext.Provider value={callsContext}> 
      {children} 
    </CallsContext.Provider>
  )
}

export default CallsContextProvider;