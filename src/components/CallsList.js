import { Container, Divider } from '@material-ui/core';
import React, { useContext } from 'react';
import { CircleLoader } from 'react-spinners';
import {CallsContext} from '../context/CallsContext';
import './callsList.css';
import CallsListItem from './CallsListItem';
import CallsListDatePicker from './CallsListDatePicker';



function CallsList() {
  const { calls, callsCounter, loading } = useContext(CallsContext);

  return (
    <Container maxWidth="xs" className="callsList">

      <div>
        <CallsListDatePicker />
      </div>

      <div className="callsList_callsCounterDiv">
        <h5>{callsCounter} calls</h5>
      </div>
      <Divider />

      { loading && 
        <div className="App_CircleLoader_centeredDiv">
          <CircleLoader loading={loading}  color={"#08B4F8"}/>
        </div>
      }

      <div className="callsList_scrollableDiv margin_top1">
        {!loading && calls.length === 0 &&
          <p>Your bot has not talked to anyone in that date range, pick other dates to see some calls</p>        
        }
        { calls && calls.map((call, index) =>
          <CallsListItem key={call.sessionId} call={call} />
        )}
      </div>
    </Container>
  )
}



export default CallsList
