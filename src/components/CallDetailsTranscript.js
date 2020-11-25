import React from 'react'
import { Container, Card } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';

import './callDetailsTranscript.css';

function CallDetailsTranscript({transcript}) {

  const MessageSent = ({message}) => {
    return (
      <div className="callTranscript_message_row">
        <div className="callTranscript_message_row">
          <ChatIcon className="callTranscript_chatIcon" />
          <Card className="callTranscript_message_card">{ message.say }</Card>
        </div>
        <div className="callTranscript_positioning_div"></div>
      </div> 
    )
  }
  
  const MessageReceived = ({message}) => {
    return (
      <div className="callTranscript_message_row">
        <div className="callTranscript_positioning_div"></div>

        <div className="callTranscript_message_row">
          <Card className="callTranscript_message_card">{ message.say }</Card> 
          <PersonIcon className="callTranscript_personIcon" />
        </div>
      </div>     
    )
  }

  return (
    <div>
       <Container className="callDetailsTranscript">
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

export default CallDetailsTranscript
