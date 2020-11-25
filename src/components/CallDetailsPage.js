import React, { useState, useEffect, useContext } from 'react';
import { CallsContext } from '../context/CallsContext';
import CallsListItem from './CallsListItem';
import CallTranscript from './CallTranscript';
import { axios } from '../axios';
import ReactAudioPlayer from 'react-audio-player';
import { CircleLoader } from 'react-spinners';
import { Container, Divider } from '@material-ui/core';


import './callDetailsPage.css'

function CallsListDetails(props) {
  const [recording, setRecording] = useState();
  const [loadingRecording, setLoadingRecording] = useState(false);
  const [transcript, setTranscript] = useState();

  const { botId } = useContext(CallsContext)

  useEffect(() => {
    setLoadingRecording(true);
    console.log('axios call STARTED from Details Page')
    // Fetch recording
    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${props.selectedCall.sessionId}/recording?discussionStartTime=${props.selectedCall.discussionStartTime}` 
    ).then(res => {
          setRecording(res.data.payload)
          setLoadingRecording(false);
      }
      )
    .catch(err => {
      setLoadingRecording(false);
      console.log(err);
    })

    // Fetch Transcript
    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${props.selectedCall.sessionId}/transcript?discussionStartTime=${props.selectedCall.discussionStartTime}` 
    ).then(res => {
          setTranscript(res.data.payload)
      }
      )
    .catch(err => {
      console.log(err);
    })
  }, [props.selectedCall, botId]);
  

  return (
    <Container className="callDetailsPage">
        <CallsListItem call={props.selectedCall} className="CallsListItem_noHover" />

        <div className="callDetailsPage_audioPlayerDiv">
          <Divider />
          
            { loadingRecording && 
              <div className="App_CircleLoader_centeredDiv">
                <CircleLoader loading={loadingRecording}  color={"#08B4F8"}/>
              </div>
            }

            { !loadingRecording && recording && 
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
