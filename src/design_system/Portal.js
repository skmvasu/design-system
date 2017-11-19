import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Box, Flex} from './layouts/Layouts';
import { Type, TextSize, TextAlign} from './type/Type';
import './portal.scss';

export class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.props.root.appendChild(this.el);
    }

    componentWillUnmount() {
        this.props.root.removeChild(this.el);
    }

    render() {  
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}


export const Modal = ({ children, root, closeModal, header}) => {
    return <Portal root={root} className="ds-modal">
        <div className="modal-wrapper">
        <Box>
            <Type tagName="h6" size={TextSize.lg}>{header}</Type>
            <Type className="close" onClick={closeModal} align={TextAlign.right}>x</Type>
        </Box>
        <Box>
            {children}
        </Box>
        </div>
    </Portal>
}
