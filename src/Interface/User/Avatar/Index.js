import React from 'react'
import PropTypes from 'prop-types'
import imgAvatar from '../img/avatar_default1.jpg'

import './style.css'

export const Avatar = ({ editable, avatar, className }) => {
    const avatarStyle = { backgroundImage: `url(${avatar || imgAvatar})` }
    return (
        <figure className={`your-avatar ${className}`} style={avatarStyle}>
            {editable && <div className='edit-avatar'><button type='button' className='inline-btn change-avatar-btn'>Изменить</button></div>}
        </figure>
    )
}

Avatar.propTypes = {
    editable: PropTypes.bool,
    avatar: PropTypes.string,
    className: PropTypes.string
}

Avatar.defaultProps = {
    editable: false,
    avatar: imgAvatar,
    className: ''
}