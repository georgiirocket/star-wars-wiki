import React from 'react';
import './ErrorComponent.css';

import errorIcon from './darth-vader.png';

const ErrorComponent = () => {
    return (
        <div className="ErrorComponent">
            <img src={errorIcon} alt="error icon" />
            <p>
                <span>Patience, only patience!!</span>
                <span>Don't panic!!</span>
            </p>
        </div>
    );
}

export default ErrorComponent;