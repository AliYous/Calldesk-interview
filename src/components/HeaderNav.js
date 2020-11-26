import React, { useContext } from 'react'
import { CallsContext } from '../context/CallsContext';
import './headerNav.css'

const BotSelector = () => {
  const {botId, setBotIdState} = useContext(CallsContext);

  const handleChange = (event) => {
    setBotIdState(event.target.value)
  }

  return(
    <>
      <select className="headerNav_botSelect" value={botId} onChange={handleChange}>
        <option value="bot1">Bot 1</option>
        <option value="bot17">Bot 17</option>
      </select>
    </>
  )
}

function HeaderNav() {
  return (
    <div className="headerNav">
      <div className="headerNav_centerDiv">
        <h2>STUDIO</h2>
        <BotSelector />        
      </div>
    </div>
  )
}

export default HeaderNav
