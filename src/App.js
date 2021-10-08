import './App.css';
import Navbar from './components/Navbar';
import Pricing from './components/login';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      
      <login />

    
      </Router>

    </div>
  );
}

export default App;
