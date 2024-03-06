export const loginUserRequest = (credentials) => ({
    type: 'LOGIN_USER_REQUEST',
    payload: credentials,
});

export const loginUserSuccess = (user) => ({
    type: 'LOGIN_USER_SUCCESS',
    payload: user,
});

export const loginUserFailure = (error) => ({
    type: 'LOGIN_USER_FAILURE',
    payload: error,
});

export const registerUserRequest = (userData) => ({
    type: 'REGISTER_USER_REQUEST',
    payload: userData,
});

export const registerUserSuccess = (user) => ({
    type: 'REGISTER_USER_SUCCESS',
    payload: user,
});

export const registerUserFailure = (error) => ({
    type: 'REGISTER_USER_FAILURE',
    payload: error,
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
