import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getInitialSmurfs } from '../actions/smurfActions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import "./App.css";
const App  = () => {
  const dispatch =  useDispatch();

  useEffect(() => {
    dispatch(getInitialSmurfs());
  }, [])
  

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <SmurfList />
      </div>
    );
}

export default App;
