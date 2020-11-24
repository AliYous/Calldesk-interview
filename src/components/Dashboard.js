import React, {useContext} from 'react';
import {CallsContext} from '../context/CallsContext';
import CallsList from './CallsList';
import CallDetailsPage from './CallDetailsPage';



import './dashboard.css';
import { Container } from '@material-ui/core';


function Dashboard() {
  const { selectedCall } = useContext(CallsContext);

  return (
    <div className="dashboard">
      <CallsList />

      { selectedCall  
       ? <CallDetailsPage selectedCall={selectedCall} /> 
       : <Container/> // used for positioning
      }  
    </div>
  )
}

export default Dashboard
