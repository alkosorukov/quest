import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Media } from 'reactstrap'
import { EditUser, UserInfo, Avatar } from '../../Interface/User/Index'

import './style.css'

const Settings = ({user}) => (
    <Fragment>
        <h1>Настройки</h1>
        <Media>
            <Media left className='settings-avatar'>
                {Avatar({ editable: true, avatar: user.avatar })}
            </Media>
            <Media body>
                {UserInfo(user)}
            </Media>
        </Media>
        <EditUser/>
    </Fragment>
)

Settings.propTypes = {
    user: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])).isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Settings)