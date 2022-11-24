import { useState } from 'react';
import MainSearch from './components/MainSearch/MainSearch';
import PageSearch from './components/PageSearch/PageSearch';

function App() {

  const [pageSearchState, setPageSearchState] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const onLogoClickHandler = () => {
    setSearchData(null);
  }

  const onSearchClickHandler = () => {
    fetch("/search").then((response) => {
      return response.json();
    }).then((data) => {
      return setSearchData(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  console.log(searchData);

  let searchUI = <MainSearch onLogoClick={onLogoClickHandler} onSearchClick={onSearchClickHandler}></MainSearch>;

  if (searchData) {
    searchUI = <PageSearch onLogoClick={onLogoClickHandler} onSearchClick={onSearchClickHandler} searchData={searchData}></PageSearch>;
  }

  return (
    <div className="App">
      {searchUI}
    </div>
  );
}

export default App;
