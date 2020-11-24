import React, { useState, useEffect, useContext } from 'react';
import { CallsContext } from '../context/CallsContext';
import CallsListItem from './CallsListItem';
import { axios } from '../axios';
import ReactAudioPlayer from 'react-audio-player';
import { Container } from '@material-ui/core';

const AudioPlayer = (props) => {
  return (
    <>
      
    </>
  )
}


function CallsListDetails(props) {
  const [loading, setLoading] = useState();
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
    <Container className="CallDetailsPage">
      <>
        <CallsListItem call={props.selectedCall} className="CallsListItem_noHover" />
        <ReactAudioPlayer
        src={recording.url}
        controls
      />
      </>
    </Container>
  )
}

export default CallsListDetails
