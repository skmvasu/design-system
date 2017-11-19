import React, { Component } from 'react';
import './type.scss';

export const TextSize = {
    default: 'ds-text-size--default',
    sm: 'ds-text-size--sm',
    lg: 'ds-text-size--lg'
};

export const TextBold = {
    default: 'ds-text--default',
    semibold: 'ds-text--semibold',
    bold: 'ds-text--bold'
};

export const Type = ({tag='span', size=TextSize.default, boldness=TextBold.default, children}) => {
    const Tag = `${tag}`; 
    const classNames = `ds-text ${size} ${boldness}`;
    return <Tag className={classNames}>
        {children}
    </Tag>
};
