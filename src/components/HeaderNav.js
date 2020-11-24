import React, { useContext } from 'react'
import './headerNav.css'
import { CallsContext } from '../context/CallsContext';


// Pour cet exercice, je sais que je n'ai accès qu'à 2 bots donc je me suis permis de les saisir en dur.
// Dans un cas réel, il faudrait fetch les différents bots auxquels l'user connecté a accès et les afficher dans la liste de bots (select)
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
