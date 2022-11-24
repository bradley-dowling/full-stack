import { useState } from "react";
import './SearchForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Form(props) {
  const [formInputValue, setFormInputValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(formInputValue);
    setFormInputValue("");
  };

  const formInputChangeHandler = (event) => {
    setFormInputValue(event.target.value);
  };

  return (
    <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search the stacks for books or authors..."
          value={formInputValue}
          onChange={formInputChangeHandler}
        />
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  );
}

export default Form;