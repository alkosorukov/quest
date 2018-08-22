import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { InputGroup, InputGroupAddon, Input, FormFeedback } from 'reactstrap'

import { Icon } from '../../Elements/Icon/Index'
import { required } from '../../../Common/validationForm'
import {ButtonLoading} from '../../Elements/ButtonLoading'

import { authorize } from './reducer'

import './style.css'

const renderField = ({ input, label, name, placeholder, addon, warning, meta: { touched, error } }) => {
  const isInValid = touched && (error || warning) ? 'is-invalid' : ''

  return <Fragment>
    {label && <label htmlFor={name}>{label}</label>}
    <InputGroup>
      {addon && <InputGroupAddon addonType='prepend' className={isInValid}>{addon}</InputGroupAddon>}
      <Input {...input} placeholder={placeholder} className={isInValid} />
    </InputGroup>
    {touched && ((error && <FormFeedback>{error}</FormFeedback>) || (warning && <FormFeedback>{warning}</FormFeedback>))}
  </Fragment>
}

renderField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  warning: PropTypes.string,
  placeholder: PropTypes.string,
  addon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  name: PropTypes.string,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object // eslint-disable-line react/forbid-prop-types
}

renderField.defaultProps = {
  placeholder: '',
  label: '',
  error: '',
  warning: '',
  value: '',
  name: '',
  addon: false,
  meta: {}
}

const Authorize = props => {

  Authorize.propTypes = {
    error: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  Authorize.defaultProps = {
    error: ''
  }

  const { error, handleSubmit, submitting, dispatch } = props

  const submut = ({ username, password }) => new Promise((resolve, reject) => {
    dispatch(authorize(username, password, resolve, reject))
  })

  return (
    <form className='autorise' onSubmit={handleSubmit(submut)}>
      <h1 className='form__title'>Вход</h1>
      <Field
        name='username'
        type='text'
        component={renderField}
        placeholder='Логин'
        addon={Icon('user')}
        validate={[required]}
      //  warn={warnLogin}
      />
      <Field
        name='password'
        type='password'
        component={renderField}
        placeholder='Пароль'
        addon={Icon('lock')}
        validate={[required]}
      // warn={warnPass}
      />
      {error && <strong>{error}</strong>}
      <ButtonLoading color='primary' className='autorise__button' type='submit' disabled={submitting}>Вход</ButtonLoading>
    </form>
  )
}

const mapStateToProps = (state) => ({
  token: state.token
})

const authorizeForm = reduxForm({
  form: 'authorizeForm', // уникальный идентификатор формы
})(Authorize)

export default connect(mapStateToProps)(authorizeForm)