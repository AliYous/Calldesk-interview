import React from 'react';
import CallsList from './CallsList';
import { Container } from '@material-ui/core';


import './dashboard.css';


function Dashboard() {
  // const { botId, from, to, callsCounter } = useContext(CallsContext);

  return (
    <div className="dashboard">
      <CallsList />
      <Container />
    </div>
  )
}

export default Dashboard
