import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import './MainSearch.css';

function MainSearch(props) {
    const onLogoClickHandler = () => {
        props.onLogoClick();
    }

    const onSearchClickHandler = (newSearch) => {
        props.onSearchClick(newSearch);
    }

    return (
        <div className="main-search-container">
            <Logo onLogoClick={onLogoClickHandler}></Logo>
            <SearchForm onSearchClick={onSearchClickHandler}></SearchForm>
        </div>
    );
}

export default MainSearch;