import { useState } from "react";
import './SearchForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchForm(props) {

  let startingInput = '';
  if (props.searchData) {
    startingInput = props.searchData.query;
  }

  const [searchQuery, setSearchQuery] = useState(startingInput);
  const submitHandler = (event) => {
    event.preventDefault();
    let newSearch = {
      query: searchQuery,
      page: 1
    }
    props.onSearchClick(newSearch);
  };

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="searchQuery"
          placeholder="Search the stacks for books or authors..."
          value={searchQuery}
          onChange={onChangeHandler}
        />
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  );
}

export default SearchForm;