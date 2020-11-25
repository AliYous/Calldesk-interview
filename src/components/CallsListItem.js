import React, { useContext } from 'react'
import {CallsContext} from '../context/CallsContext';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import './callsListItem.css'

function CallsListItem(props) {
  const callStartTime = new Date(props.call.callStartTime).toISOString().substr(11,5);
  const callDate = new Date(props.call.callStartTime).toLocaleDateString().substring(0,10);
  const callDuration = new Date(props.call.callDuration).toISOString().slice(11,19);

  const {setSelectedCallState} = useContext(CallsContext);

  const handleOnClick = (newSelectedCall) => {
      setSelectedCallState(newSelectedCall);
  }

  return (
    <>
      <Card className="classListItem" variant="outlined" onClick={() => handleOnClick(props.call)}>
        <CardContent className="classListItem_card">
          <div>
            <Typography variant="h5" component="h2">
              { callStartTime }
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              { callDate }
            </Typography>
          </div>
          
          <div>
            <Typography color="textSecondary">
                { props.call.callerNumber }
            </Typography>
            <Typography color="textSecondary">
                { callDuration }
            </Typography>
          </div>
         
        </CardContent>
      </Card>
      <Divider />
    </>
  )
}

export default CallsListItem
