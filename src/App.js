import { useState } from 'react';
import axios from 'axios';
import MainSearch from './components/MainSearch/MainSearch';
import PageSearch from './components/PageSearch/PageSearch';

function App() {

  const [pageSearchState, setPageSearchState] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const onLogoClickHandler = () => {
    setPageSearchState(false);
  }

  const onSearchClickHandler = () => {
    setPageSearchState(true);
  }

  let searchUI = <MainSearch onLogoClick={onLogoClickHandler} onSearchClick={onSearchClickHandler}></MainSearch>;

  if (pageSearchState) {
    searchUI = <PageSearch onLogoClick={onLogoClickHandler} onSearchClick={onSearchClickHandler}></PageSearch>;
  }

  return (
    <div className="App">
      {searchUI}
    </div>
  );
}

export default App;
