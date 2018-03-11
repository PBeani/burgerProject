import React, { Component } from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliar/Auxiliar'
import Backdrop from './../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate() {
        console.log('Update Parent')
    }

    render() {
        const props = this.props
        return (
            <Aux>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal