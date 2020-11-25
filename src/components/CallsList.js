import { Container, Divider } from '@material-ui/core';
import React, { useContext } from 'react';
import { CircleLoader } from 'react-spinners';
import {CallsContext} from '../context/CallsContext';
import './callsList.css';
import CallsListItem from './CallsListItem';


function CallsList() {
  const { calls , callsCounter, loading } = useContext(CallsContext);
  

  return (
    <Container maxWidth="xs" className="callsList">
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
        { calls && calls.map((call, index) =>
          <CallsListItem key={call.sessionId} call={call} />
        )} 
      </div>
    </Container>
  )
}



export default CallsList
