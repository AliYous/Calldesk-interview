import React, { useState, useEffect, useContext } from 'react';
import { CallsContext } from '../context/CallsContext';
import CallsListItem from './CallsListItem';
import CallTranscript from './CallTranscript';
import { axios } from '../axios';
import ReactAudioPlayer from 'react-audio-player';
import { Container, Divider } from '@material-ui/core';


import './callDetailsPage.css'

function CallsListDetails(props) {
  const [loading, setLoading] = useState();
  const [recording, setRecording] = useState();
  const [transcript, setTranscript] = useState();

  const { botId } = useContext(CallsContext)

  useEffect(() => {
    setLoading(true);
    console.log('axios call STARTED from Details Page')
    // Fetch recording
    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${props.selectedCall.sessionId}/recording?discussionStartTime=${props.selectedCall.discussionStartTime}` 
    ).then(res => {
          setRecording(res.data.payload)
          setLoading(false);
      }
      )
    .catch(err => {
      setLoading(false);
      console.log(err);
    })

    // Fetch Transcript
    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${props.selectedCall.sessionId}/transcript?discussionStartTime=${props.selectedCall.discussionStartTime}` 
    ).then(res => {
          setTranscript(res.data.payload)
          setLoading(false);
      }
      )
    .catch(err => {
      setLoading(false);
      console.log(err);
    })
  }, [props.selectedCall]);
  

  return (
    <Container className="callDetailsPage">
        <CallsListItem call={props.selectedCall} className="CallsListItem_noHover" />

        <div className="callDetailsPage_audioPlayerDiv">
          <Divider />
            { recording && 
              <ReactAudioPlayer
                src={recording.url}
                className="callDetailsPage_audioPlayer"
                controls
              />
            }
          <Divider />
        </div>

        <div className="callDetailsPage_callTranscriptDiv">
          <CallTranscript transcript={transcript} />
        </div>

    </Container>
  )
}

export default CallsListDetails
