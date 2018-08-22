import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import { LeftMenu } from '../../Interface/LeftMenu/Index'
import { Footer } from '../../Interface/Footer/Index'
import { Header } from '../../Interface/Header/Index'
import Auth from '../Auth/Index'
import { Clients } from '../Clients/Index'
import { PasDePage } from '../404/Index'
import { MainLoading } from '../../Interface/MainLoading/Index'
import Settings from '../Settings/Index'
import ModalSuccess from '../../Interface/Modals/ModalSuccess/Index'

import 'String.prototype.startsWith'

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

class App extends PureComponent {

    static propTypes = {
        token: PropTypes.string.isRequired
    }

    render() {
        const { token } = this.props

        return (
            <Fragment>
                <div className={token ? 'content' : 'content content--intro'}>

                    <Switch>
                        {!token && <Redirect exact from='/' to='/auth' />}
                        <Route exact path='/' render={Clients} />
                        <Route path='/auth' component={Auth} />

                        {token && <Route path='/settings' render={() => (<Settings token={token} />)} />}
                        <Route component={PasDePage} />
                    </Switch>
                </div>
                {token && LeftMenu()}

                {Header()}
                {Footer()}
                {MainLoading()}
                <ModalSuccess hideTimer={2000}/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    isLoading: state.mainLoading.loadingPage
})

export default withRouter(connect(mapStateToProps)(App))