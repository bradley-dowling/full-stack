import { useState } from 'react';
import axios from 'axios';
import MainSearch from './components/MainSearch/MainSearch';

function App() {

  const [searchData, setSearchData] = useState(null);

  function search() {
    axios({
      method: "GET",
      url: "/search",
    }).then((response) => {
      const res = response.data;
      setSearchData(({
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
      <MainSearch></MainSearch>
    </div>
  );
}

export default App;
