import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [msgData, setMsgData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "/hello",
    }).then((response) => {
      const res = response.data;
      console.log(res);
      setMsgData(({
        msg: res.msg,
      }))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getData}>Click me</button>
        {msgData && <div>
              <p>Message: {msgData.msg}</p>
            </div>
        }
      </header>
    </div>
  );
}

export default App;
