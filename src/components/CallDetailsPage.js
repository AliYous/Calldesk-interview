import React, { useState, useEffect, useContext } from 'react';
import { CallsContext } from '../context/CallsContext';
import { axios } from '../axios';
import { Container } from '@material-ui/core';

function CallsListDetails(props) {
  const [loading, setLoading] = useState()
  const [recording, setRecording] = useState();
  const [transcript, setTranscript] = useState();

  const { selectedCall, botId } = useContext(CallsContext)

  useEffect(() => {
    setLoading(true);
    console.log('axios call STARTED from Details Page')

    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${selectedCall.sessionId}/recording?discussionStartTime=${selectedCall.discussionStartTime}` 
    ).then(res => {
          setRecording(res.data.payload)
          setLoading(false);
      }
      )
    .catch(err => {
      setLoading(false);
      console.log(err);
    })

    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${selectedCall.sessionId}/transcript?discussionStartTime=${selectedCall.discussionStartTime}` 
    ).then(res => {
          setTranscript(res.data.payload)
          setLoading(false);
      }
      )
    .catch(err => {
      setLoading(false);
      console.log(err);
    })
  }, [selectedCall]);
  

  return (
    <Container>
      { !loading && 
        <div>{props.selectedCall.sessionId}</div>     
      }
    </Container>
  )
}

export default CallsListDetails
