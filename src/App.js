import { useState } from 'react';
import MainSearch from './components/MainSearch/MainSearch';
import PageSearch from './components/PageSearch/PageSearch';

function App() {

  const [searchData, setSearchData] = useState(null);

  const onLogoClickHandler = () => {
    setSearchData(null);
  }

  const onSearchClickHandler = (newSearch) => {
    fetch(`/search/${newSearch.query}/${newSearch.page}`).then((response) => {
      return response.json();
    }).then((data) => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      return setSearchData(data);
    }).catch((err) => {
      console.log(err);
    });
  }

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
