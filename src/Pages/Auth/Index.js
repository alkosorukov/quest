import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { showLoader, hideLoader } from '../../Interface/MainLoading/Index'

import {Authorize, authorizeToken} from '../../Interface/User/Index'


class Auth extends PureComponent {

    static propTypes = {
        token: PropTypes.string.isRequired
    }

    async componentDidMount() {
        const { dispatch, token } = this.props
        const tokenLS = localStorage.getItem('token')
console.log('tokenLS', tokenLS)
        if (!token && tokenLS) {
            await dispatch(showLoader())
            await dispatch(authorizeToken(tokenLS))
            await dispatch(hideLoader())
        }
    }

    render() {
        const { token } = this.props
        const tokenLS = localStorage.getItem('token')
        if (token && token !== tokenLS) { localStorage.setItem('token', token) }

        return (
            <Fragment>
                {token && <Redirect to='/' />}

                {!tokenLS && <Authorize />}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    token: state.user.token
});

export default withRouter(connect(mapStateToProps)(Auth))