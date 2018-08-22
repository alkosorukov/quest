import React, { Component, Fragment } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { actions } from './actions'

class ModalSuccess extends Component {

  modalTimer = null

  static propTypes = {
    hideTimer: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    modals: PropTypes.objectOf(PropTypes.string)
  }


  static defaultProps = {
    modals: {},
    hideTimer: 0
  }



  componentDidUpdate() {
    const { hideTimer, modals } = this.props

    if (hideTimer && Object.keys(modals).length > 0) {
      this.modalTimer = setTimeout(this.toggle, hideTimer)
    }
  }

  toggle = () => {
    const { dispatch } = this.props

    clearTimeout(this.modalTimer)
    dispatch(actions.hideModals())
  }

  render() {
    const { modals } = this.props

    return (
      <Modal isOpen={Object.keys(modals).length > 0} toggle={this.toggle} className='modal-success'>
        {Object.keys(modals).length && <Fragment>
          {modals.header && <ModalHeader>{modals.header}</ModalHeader>}
          {modals.text && <ModalBody>
            <p>{modals.text}</p>
            <Button color="success" onClick={this.toggle}>Закрыть</Button>
          </ModalBody>
          }
        </Fragment>
        }
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  modals: state.modals.modalSuccess[0]
})

export default connect(mapStateToProps)(ModalSuccess)

export { actions } from './actions'