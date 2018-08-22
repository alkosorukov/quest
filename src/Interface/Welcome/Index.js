import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'

class Welcome extends PureComponent {
    static propTypes = {
        token: PropTypes.string.isRequired,
        userName: PropTypes.string
    }

    static defaultProps = {
        userName: ''
    }
    
    state = { show: this.props.token}    

    componentDidUpdate(prevProps) {
        const {token} = this.props

        if (token && !prevProps.token) {
            this.show()
        }
    }
  
    show = () => this.setState({ show: true })

    render() {
        const { userName, token } = this.props
        const {show} = this.state

        return (
            <Fragment>
                {token && show && <div className='welcome-user'>{`Привет, ${userName}! Хорошего рабочего дня!`}</div>}
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    token: state.user.token,
    userName: state.user.userName
})

export default connect(mapStateToProps)(Welcome)