import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import './MainSearch.css';

function MainSearch(props) {
    const onLogoClickHandler = () => {
        props.onLogoClick();
    }

    return (
        <div className="main-search-container">
            <Logo onLogoClick={onLogoClickHandler}></Logo>
            <SearchForm></SearchForm>
        </div>
    );
}

export default MainSearch;