import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Popover, PopoverBody } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import  {defaultAvatar, exitSite}  from '../User/Index'

import './style.css'


class UserPanelMenu extends PureComponent {

    static propTypes = {
        token: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired,
        userName: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string        
    }

    static defaultProps = {
        userName: '',
        email: '',
        avatar: defaultAvatar
    }

    state = { popoverOpen: false }

    toggle = () => {
        const { popoverOpen } = this.state
        this.setState({ popoverOpen: !popoverOpen })
    }

    changeAcc=() =>{
        this.toggle()
    }

    click = () => {
        const { dispatch } = this.props
        this.toggle()
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token')
        }
        dispatch(exitSite())
    }

    render() {
        const { popoverOpen } = this.state
        const { token, userName, email, avatar } = this.props
        const tokenLS = localStorage.getItem('token')
        const styleAvatar = { backgroundImage: `url(${avatar || defaultAvatar})` }
        return (
            <Fragment>
                {token || tokenLS ?
                    <Fragment>
                        {token &&
                            <Fragment>
                                <button type="button" className="header-tool__enter ml-38 inline-btn" onClick={this.toggle} id='Popover-user'>{userName}</button>
                                <Popover placement='bottom-end' isOpen={popoverOpen} target='Popover-user' toggle={this.toggle} className="usermenu">
                                    <PopoverBody>
                                        <div className="usermenu-body">
                                            <figure className="usermenu-body__avatar" style={styleAvatar} />
                                            <address className="usermenu-body__info">
                                                <p className="usermenu-body__info-name">{userName}</p>
                                                <p className="usermenu-body__info-mail">{email}</p>
                                                <Link to="/settings" className="usermenu-body__change-acc" onClick={this.changeAcc}>Изменить аккаунт</Link>
                                            </address>
                                            <Link to="/auth" className="btn btn-primary usermenu-body__exit-button" onClick={this.click}>Выход</Link>
                                        </div>
                                    </PopoverBody>
                                </Popover>
                            </Fragment>
                        }
                    </Fragment>
                    :
                    <Link to="/auth" className="header-tool__enter ml-38">ВХОД</Link>
                }
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    ...state.user
})

export default withRouter(connect(mapStateToProps)(UserPanelMenu))