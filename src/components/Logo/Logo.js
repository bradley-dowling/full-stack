import {ReactComponent as FSLogo} from '../../resources/Logo.svg';
import React, { useState } from 'react';
import './Logo.css';

function Logo(props) {

    const logoClickHandler = () => {
        props.onLogoClick();
    }

    return (
        <div className='fs-logo-container' onClick={logoClickHandler}>
            <FSLogo className="fs-logo-image"/>
        </div>
    );
}

export default Logo;