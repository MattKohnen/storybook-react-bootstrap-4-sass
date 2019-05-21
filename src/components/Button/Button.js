import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.scss';

// Pass Bootstrap's Button through our Button
const Button = ({className = '', ...props}) => {
    let classNames = ['our-button', className].join(' ');

    return <BootstrapButton className={classNames} {...props} />;
};

export default Button;
