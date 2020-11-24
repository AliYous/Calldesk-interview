import React from 'react'
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import './callsListItem.css'

function CallsListItem(props) {
  const callStartTime = new Date(props.call.callStartTime).toISOString().substr(11,5);
  const callDate = new Date(props.call.callStartTime).toLocaleDateString().substring(0,10);
  const callDuration = new Date(props.call.callDuration).toISOString().slice(11,19);

  const handleOnClick = () => {
    console.log("clicked call item")
  }

  return (
    <>
      <Card className="classListItem" variant="outlined" onClick={() => handleOnClick()}>
        <CardContent className="classListItem_card">
          <div className="classListItem_callTimeAndDateDiv">
            <Typography variant="h5" component="h2">
              { callStartTime }
            </Typography>
            <Typography className="classListItem_callDate" variant="body2" component="p" color="textSecondary">
              { callDate }
            </Typography>
          </div>
          <Typography className="classListItem_callDuration" color="textSecondary">
              { callDuration }
          </Typography>
        </CardContent>
      </Card>
      <Divider />
    </>
  )
}

export default CallsListItem
