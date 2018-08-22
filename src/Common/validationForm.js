export const required = value => (value || typeof value === 'number' ? undefined : 'Заполните поле')

export const matchInput = (input, allInputs) => {
    const { password, confirmPassword } = allInputs
    return (password === confirmPassword ? undefined : 'Пароль не совпадает')
}

export const matchOldNewPassword = (input, allInputs) => {
    const { password, oldPassword } = allInputs
    return (password !== oldPassword ? undefined : 'Новый пароль не должен совпадать со старым')
}

export const minLength = min => value => value && value.length < min ? `Символов должно быть не менее ${min}` : undefined

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Только цифры и латиница' : undefined