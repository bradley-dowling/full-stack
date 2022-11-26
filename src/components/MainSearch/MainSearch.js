import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import './MainSearch.css';
import Card from '../Card/Card';

function MainSearch(props) {
    const onLogoClickHandler = () => {
        props.onLogoClick();
    }

    const onSearchClickHandler = (newSearch) => {
        props.onSearchClick(newSearch);
    }

    let bookInfo = {
        bookCover: "https://covers.powells.com/9780767908184.jpg",
        bookTitle: "A Short History of Nearly Everything",
        bookAuthor: "Bill Bryson",
        bookISBN: "128401257"
    }

    return (
        <div className="main-search-container">
            <Logo onLogoClick={onLogoClickHandler}></Logo>
            <SearchForm onSearchClick={onSearchClickHandler}></SearchForm>
            <p className='main-footer'>A Search Engine by Brad and Ramiz...</p>
        </div>
    );
}

export default MainSearch;