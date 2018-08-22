import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { InputGroup, InputGroupAddon, Input, FormFeedback } from 'reactstrap'
import { changePassword } from './reducer'
import { required, matchInput, minLength, alphaNumeric, matchOldNewPassword } from '../../../Common/validationForm'
import {ButtonLoading} from '../../Elements/ButtonLoading'

import './style.css'

const renderField = ({ input, label, name, placeholder, addon, warning, type, meta: { touched, error } }) => {
    const isInValid = touched && (error || warning) ? 'is-invalid' : ''

    return <Fragment>
        {label && <label htmlFor={name}>{label}</label>}
        <InputGroup>
            {addon && <InputGroupAddon addonType='prepend' className={isInValid}>{addon}</InputGroupAddon>}
            <Input {...input} type={type} placeholder={placeholder} className={isInValid} />
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
    type: PropTypes.string,
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
    type: 'text',
    addon: false,
    meta: {}
}

const minLength6 = minLength(6)

const EditUser = props => {

    EditUser.propTypes = {
        error: PropTypes.string,
        token: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired
    }

    EditUser.defaultProps = {
        error: ''
    }

    const { error, handleSubmit, submitting, dispatch, token, reset } = props

    const resetForm = () => props.dispatch(reset('editUserForm'))

    const submut = ({ oldPassword, password, confirmPassword }) => new Promise((resolve, reject) => {
        dispatch(changePassword(oldPassword, password, confirmPassword, token, resolve, reject, resetForm))
    })



    return (
        <form className='change-pass' onSubmit={handleSubmit(submut)}>
            <h1 className='form__title'>Изменение пароля</h1>
            <Field
                name='oldPassword'
                type='password'
                label='Старый пароль'
                component={renderField}
                validate={[required, minLength6, alphaNumeric]}
            />
            <Field
                name='password'
                type='password'
                label='Новый пароль'
                component={renderField}
                validate={[required, minLength6, alphaNumeric, matchOldNewPassword]}
            />
            <Field
                name='confirmPassword'
                type='password'
                label='Подтвердите новый пароль'
                component={renderField}
                validate={[required, matchInput, minLength6, alphaNumeric]}
            />
            {error && <div>{error}</div>}
            <ButtonLoading color='primary' className='autorise__button' type='submit' disabled={submitting}>Сохранить новый пароль</ButtonLoading>
        </form>
    )
}

const mapStateToProps = (state) => ({
    token: state.user.token
})

const editUserForm = reduxForm({
    form: 'editUserForm', // уникальный идентификатор формы
})(EditUser)

export default connect(mapStateToProps)(editUserForm)