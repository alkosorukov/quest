import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

import './style.css'

const buttonLoading = (ComposedComponent) => class extends PureComponent {
    static propTypes = {
        children: PropTypes.string.isRequired
    }

    render() {
        return (
            <ComposedComponent {...this.props}>
                <div className="bl-loader"><div className="bl-bounce1" /><div className="bl-bounce2" /><div className="bl-bounce3" /></div>
                <div className="bl-text">{this.props.children}</div>
            </ComposedComponent>
        )
    }
}


const button = (props) => <Button {...props}>{props.children}</Button>

button.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired
}

export const ButtonLoading = buttonLoading(button)