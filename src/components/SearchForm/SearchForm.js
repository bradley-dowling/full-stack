import { useState } from "react";
import './SearchForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Form(props) {

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearchClick();
  };

  return (
    <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search the stacks for books or authors..."
        />
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  );
}

export default Form;