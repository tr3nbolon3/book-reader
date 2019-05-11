import $validator from 'validator';

export const email = (message = 'Значение поля не является правильным email адресом') => value =>
  $validator.isEmail(value) ? undefined : message;

export const required = (message = 'Поле должно быть заполнено') => value => (value ? undefined : message);

// eslint-disable-next-line no-restricted-globals
export const number = (message = 'Значение поля должно быть числом') => value => (isNaN(value) ? message : undefined);

export const minValue = (min, message = `Значение поля должно быть больше чем ${min}`) => value =>
  // eslint-disable-next-line no-restricted-globals
  isNaN(value) || value >= min ? undefined : message;

// const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})');
export const password = (message = 'Пароль должен быть не менее 6 символов') => value =>
  value.length > 5 ? undefined : message;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
