import React from 'react'
import PropTypes from 'prop-types'

export const UserInfo = ({ userName, role, email }) => (
    <address className='your-info'>
        <h6 className='your-info__name'>{userName}</h6>
        <p className='your-info__role'>{role}</p>
        <p className='your-info__email'>{email}</p>
    </address>
)

UserInfo.propTypes = {
    userName:PropTypes.string.isRequired, 
    role:PropTypes.string.isRequired, 
    email:PropTypes.string.isRequired
}