import Auth from 'j-toker';

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

const AuthService = {
  signIn(values) {
    return new Promise((resolve, reject) => {
      Auth.emailSignIn(values)
        .then((res) => {
          resolve(res);
        })
        .fail((res) => {
          reject(res);
        });
    });
  },

  signUp(values) {
    return new Promise((resolve, reject) => {
      Auth.emailSignUp(values)
        .then((res) => {
          resolve(res);
        })
        .fail((res) => {
          reject(res);
        });
    });
  },

  signOut() {
    Auth.signOut();
  },

  validateToken() {
    return new Promise((resolve, reject) => {
      Auth.validateToken()
        .then((userData) => {
          resolve(userData);
        })
        .fail((res) => {
          reject(res);
        });
    });
  },
};

export default AuthService;
