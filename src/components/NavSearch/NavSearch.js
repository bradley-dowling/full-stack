import './NavSearch.css';
import SearchForm from '../SearchForm/SearchForm';

function NavBar() {
    return (
        <div className='nav-search-container'>
            <SearchForm></SearchForm>
        </div>
    );
}

export default NavBar;