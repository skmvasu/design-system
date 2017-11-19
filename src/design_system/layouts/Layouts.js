import React, { Component } from 'react';
import './layout.scss';

export const Flex = ({ children, lastElRight}) => {
    const classNames = `flex ${lastElRight ? 'flex-align-right' : ''}`;
    return (<div className={classNames}> 
        {children}
    </div>);
};

export const Box = ({children}) => {
    return (<div>
        {children}
    </div>);
};