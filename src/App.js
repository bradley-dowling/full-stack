import { useState } from 'react';
import axios from 'axios';
import MainSearch from './components/MainSearch/MainSearch';
import PageSearch from './components/PageSearch/PageSearch';

function App() {

  const [pageSearchState, setPageSearchState] = useState(false);

  const onLogoClickHandler = () => {
    setPageSearchState(false);
  }

  return (
    <div className="App">
      {pageSearchState ? <PageSearch onLogoClick={onLogoClickHandler}></PageSearch> : <MainSearch onLogoClick={onLogoClickHandler}></MainSearch>}
    </div>
  );
}

export default App;
