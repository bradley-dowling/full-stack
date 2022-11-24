import './PageSearch.css';
import SearchForm from '../SearchForm/SearchForm';
import Logo from '../Logo/Logo';
import SearchResultList from '../SearchResultList/SearchResultList';
import PageSelector from '../PageSelector/PageSelector';

function PageSearch(props) {

    const searchResults = [];
    const onLogoClickHandler = () => {
        props.onLogoClick();
    }

    const onSearchClickHandler = () => {
        props.onSearchClick();
    }

    return (
        <div>
            <div className='nav-search-container'>
                <SearchForm onSearchClick={onSearchClickHandler}></SearchForm>
                <Logo onLogoClick={onLogoClickHandler}></Logo>
            </div>
            <SearchResultList searchResults={searchResults}></SearchResultList>
            <PageSelector onLogoClick={onLogoClickHandler}></PageSelector>
        </div>
    );
}

export default PageSearch;