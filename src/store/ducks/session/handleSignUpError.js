export default function({ error, dispatch, showNotification }) {
  // console.log('error', error);
  switch (error.code) {
    case 'auth/email-already-in-use':
      dispatch(showNotification({ type: 'error', message: 'Пользователь с данной почтой уже существует.' }));
      break;
    case 'auth/invalid-email':
      dispatch(showNotification({ type: 'error', message: 'Некоректный адрес электронной почты' }));
      break;
    case 'auth/operation-not-allowed':
      dispatch(showNotification({ type: 'error', message: 'Данная операция временно недоступна.' }));
      break;
    case 'auth/weak-password':
      dispatch(showNotification({ type: 'error', message: 'Слабый пароль.' }));
      break;
    default:
      dispatch(
        showNotification({ type: 'error', message: 'Во время регистрации произошла ошибка, попробуйте снова.' }),
      );
      break;
  }
}
