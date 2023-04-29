import React from 'react';
import './App.css';

import OptionSelection from './Components/OptionSelection/OptionSelection'
import options from './AIOptions/index.json';


function App() {

  return (
    <React.Fragment>
      <OptionSelection options={options} />
    </React.Fragment>
  );
}

export default App;
