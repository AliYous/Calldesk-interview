import './App.css';
import Dashboard from './components/Dashboard';
import HeaderNav from './components/HeaderNav';
import { CallsContextProvider } from './context/CallsContext';

function App() {  
  return (
    <CallsContextProvider> 
      <div className="App">
          <HeaderNav />
          <Dashboard />
      </div>
    </CallsContextProvider> 

  )
}

export default App;
