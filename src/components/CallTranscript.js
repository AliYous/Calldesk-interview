import React from 'react'
import { Container, Card } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';

import './callTranscript.css';

function CallTranscript({transcript}) {

  const MessageSent = ({message}) => {
    return (
      <div className="callTranscript_messageSentDiv callTranscript_messageDiv">
          <ChatIcon />
          <Card className="callTranscript_message">{ message.say }</Card>
      </div> 
    )
  }
  
  const MessageReceived = ({message}) => {
    return (
      <div className="callTranscript_messageReceivedWrapper">
        <div className="callTranscript_messageReceivedDiv callTranscript_messageDiv">
            <Card className="callTranscript_message callTranscript_messageReceived">{ message.say }</Card> 
            <PersonIcon />
        </div> 
      </div>     
    )
  }

  return (
    <div>
       <Container className="callTranscript">
        { transcript &&  
          transcript.map((message, id) =>  message.speaker==="bot" 
            ? <MessageSent key={id} message={message} />
            : <MessageReceived key={id} message={message}/>
          )
        }
      </Container>
    </div>
  )
}

export default CallTranscript
