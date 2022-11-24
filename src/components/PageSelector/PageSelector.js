import Logo from '../Logo/Logo';
import './PageSelector.css';

function PageSelector(props) {

    const onLogoClickHandler = () => {
        props.onLogoClick();
    }

    const pages = []
    for (let i = 1; i <= props.totalPages; i++) {
        if (i === props.currentPage) {
            pages.push(<p className="current-page">{i}</p>);
        } else {
            pages.push(<p className="other-page">{i}</p>);
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