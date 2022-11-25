import Logo from '../Logo/Logo';
import './PageSelector.css';

function PageSelector(props) {

    const onLogoClickHandler = () => {
        props.onLogoClick();
    }

    const onPageClickHandler = (page_num) => {
        let newSearch = {
            page: page_num,
            query: props.searchData.query
        }
        props.onSearchClick(newSearch);
    }

    const pages = []
    for (let i = 1; i <= props.searchData.page_count; i++) {
        if (i == props.searchData.current_page) {
            pages.push(<p key={i} className="current-page">{i}</p>);
        } else {
            pages.push(<p key={i} className="other-page" onClick={() => onPageClickHandler(i)}>{i}</p>);
        }
    }

    return (
        <div className='page-selector'>
            <Logo className='page-selector-logo' onLogoClick={onLogoClickHandler}></Logo>
            <div className='page-flex-container'>
                {pages}
            </div>
        </div>
    );
}

export default PageSelector;