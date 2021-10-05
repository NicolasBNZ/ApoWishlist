export const authenticateUser = (token) => {
    localStorage.setItem('token', token);
    console.log('token: ', token);
}

export const isUserAuthenticated = () => {
    return localStorage.getItem('token') !== null
}

export const deAuthenticateUser = () =>  {
    localStorage.removeItem('token');
  }

export const getToken = () => {
    return localStorage.getItem('token');
}
