import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import './MainSearch.css';

function MainSearch(props) {
    return (
        <div className="main-search-container">
            <Logo></Logo>
            <SearchForm></SearchForm>
        </div>
    );
}

export default MainSearch;