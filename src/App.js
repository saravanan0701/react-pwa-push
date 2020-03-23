import React,{ useEffect } from 'react';
import logo from './logo.svg';
import { messaging } from "./init-fcm";
import './App.css';

function App() {

  useEffect( ()=>{
    messaging.requestPermission()
    .then(async function(e) {
      console.log(e);
      const token = await messaging.getToken();
      console.log(token);
    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });

    messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      // ...
    });
    
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
