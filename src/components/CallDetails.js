import React, { useState, useEffect, useContext } from 'react';
import { CallsContext } from '../context/CallsContext';
import CallsListItem from './CallsListItem';
import CallDetailsTranscript from './CallDetailsTranscript';
import { axios } from '../axios';
import ReactAudioPlayer from 'react-audio-player';
import { CircleLoader } from 'react-spinners';
import { Container, Divider } from '@material-ui/core';


import './callDetails.css'

function CallDetails(props) {
  const [recording, setRecording] = useState();
  const [loadingRecording, setLoadingRecording] = useState(false);
  const [transcript, setTranscript] = useState();
  const [loadingTranscript, setLoadingTranscript] = useState(false);

  const { botId } = useContext(CallsContext)

  useEffect(() => {
    setLoadingRecording(true);
    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${props.selectedCall.sessionId}/recording?discussionStartTime=${props.selectedCall.discussionStartTime}` 
    ).then(res => {
          setRecording(res.data.payload);
          setLoadingRecording(false);
      }
      )
    .catch(err => {
      setRecording(null);
      setLoadingRecording(false);
    })

    setLoadingTranscript(true);
    axios.get(
      `/workspaces/calldesk-product/bots/${botId}/calls/${props.selectedCall.sessionId}/transcript?discussionStartTime=${props.selectedCall.discussionStartTime}` 
    ).then(res => {
          setTranscript(res.data.payload);
          setLoadingTranscript(false);
      }
      )
    .catch(err => {
      setTranscript(null)
      setLoadingTranscript(false)
    })
  }, [props.selectedCall]);
  

  return (
    <Container className="callDetailsPage">
        <CallsListItem call={props.selectedCall} noHover />

        <div className="callDetailsPage_audioPlayerDiv">
          <Divider />
            { loadingRecording && 
              <div className="App_CircleLoader_centeredDiv">
                <CircleLoader loading={loadingRecording}  color={"#08B4F8"}/>
              </div>
            }

            { !loadingRecording && !recording &&
              <p>No recording available for this call</p> 
            }

            { !loadingRecording && recording  &&
                <ReactAudioPlayer
                  src={recording.url}
                  className="callDetailsPage_audioPlayer"
                  controls
                />
            }
          <Divider />
        </div>

        <div className="callDetailsPage_callTranscriptDiv">
        { !loadingTranscript && !transcript  &&
          <p>No transcript available for this call</p>             
        }
        { !loadingTranscript && transcript  &&
          <CallDetailsTranscript transcript={transcript} />          
        }
        </div>

    </Container>
  )
}

export default CallDetails
