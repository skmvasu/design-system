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

export const TextAlign = {
    default: 'ds-text-align--default',
    right: 'ds-text-align--right',
    justify: 'ds-text-align--justify'
}

export const Type = ({ tag = 'span', size = TextSize.default, boldness = TextBold.default, children, className, align=TextAlign.default}) => {
    const Tag = `${tag}`; 
    const classNames = `ds-text ${size} ${boldness} ${align} ${className ? className : ''}`;
    return <Tag className={classNames}>
        {children}
    </Tag>
};
