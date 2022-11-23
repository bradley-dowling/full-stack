import {ReactComponent as FSLogo} from '../../resources/Logo.svg';
import './Logo.css';

function Logo() {
    return (
        <div className='fs-logo-container'>
            <p className='fs-logo-text'>Full</p>
            <FSLogo className="fs-logo-image"/>
            <p className='fs-logo-text'>Stack</p>
        </div>
    );
}

export default Logo;