import './PageSearch.css';
import SearchForm from '../SearchForm/SearchForm';
import Logo from '../Logo/Logo';
import SearchResultList from '../SearchResultList/SearchResultList';
import PageSelector from '../PageSelector/PageSelector';

function PageSearch(props) {

    const searchData = props.searchData;

    const onLogoClickHandler = () => {
        props.onLogoClick();
    }

    const onSearchClickHandler = (newSearch) => {
        props.onSearchClick(newSearch);
    }

    return (
        <div>
            <div className='nav-search-container'>
                <SearchForm onSearchClick={onSearchClickHandler} searchData={searchData}></SearchForm>
                <Logo onLogoClick={onLogoClickHandler}></Logo>
            </div>
            <SearchResultList searchData={searchData}></SearchResultList>
            <PageSelector onLogoClick={onLogoClickHandler} onSearchClick={onSearchClickHandler} searchData={searchData}></PageSelector>
        </div>
    );
}

export default PageSearch;