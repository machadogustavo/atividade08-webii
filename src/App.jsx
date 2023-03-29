import { useEffect, useState } from 'react';
import './App.css';
import Time from './components/Time/time';
import Greeting from './components/Greeting/greeting';
import Phrase from './components/Phrase/phrase';

const App = () => {


  return (
    <div className="App">
      <div className="top"></div>
      <div className="middle">
        <Time/>
        <Greeting myName='Gustavo'/>
      </div>
      <Phrase/>
    </div>
  );
}

export default App;