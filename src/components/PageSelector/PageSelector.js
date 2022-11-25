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
    let current_page = parseInt(props.searchData.current_page);
    let total_pages = parseInt(props.searchData.page_count);
    let start = 1;
    let end = 11;

    if (current_page > 5) {
        start = current_page - 5;
        end = current_page + 5;

        if (end >= total_pages) {
            start = Math.max(1, total_pages - 10);
        }
    }

    console.log(start)
    console.log(end)

    for (let i = start; i <= end; i++) {
        if (i > props.searchData.page_count) {
            break;
        }

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