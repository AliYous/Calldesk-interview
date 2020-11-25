import React, { useContext } from 'react'
import {CallsContext} from '../context/CallsContext';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import './callsListItem.css'

function CallsListItem({call, noHover}) {
  const callStartTime = new Date(call.callStartTime).toISOString().substr(11,5);
  const callDate = new Date(call.callStartTime).toLocaleDateString().substring(0,10);
  const callDuration = new Date(call.callDuration*1000).toISOString().slice(11,19);

  const {setSelectedCallState} = useContext(CallsContext);

  const handleOnClick = (newSelectedCall) => {
    // We want the action to trigger only if the component is NOT in display mode (noHover)
    !noHover && setSelectedCallState(newSelectedCall);
  }

  let cardClassNames = 'callsListItem_card';
  if (noHover) {
    cardClassNames += ' callsListItem_cardNoHover';
  } else {
    cardClassNames += ' callsListItem_cardHover';
  }
  return (
    <>
      <Card className="callsListItem" variant="outlined" onClick={() => handleOnClick(call)}>
        <CardContent className={cardClassNames}>
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
                { call.callerNumber }
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
