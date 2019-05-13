export default function({ error, dispatch, showNotification }) {
  // console.log('error', error);
  switch (error.code) {
    case 'auth/invalid-email':
      dispatch(showNotification({ type: 'error', message: 'Неверный адрес почты.' }));
      break;
    case 'auth/user-disabled':
      dispatch(showNotification({ type: 'error', message: 'Пользователь заблокирован.' }));
      break;
    case 'auth/user-not-found':
      dispatch(showNotification({ type: 'error', message: 'Пользователь не найден.' }));
      break;
    case 'auth/wrong-password':
      dispatch(showNotification({ type: 'error', message: 'Неверный пароль.' }));
      break;
    default:
      dispatch(showNotification({ type: 'error', message: 'Во время входа произошла ошибка, попробуйте снова.' }));
      break;
  }
}
