const initialState = {
    user: null,
    error: null,
    isLoading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER_REQUEST':
      case 'REGISTER_USER_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'LOGIN_USER_SUCCESS':
      case 'REGISTER_USER_SUCCESS':
        return { ...state, isLoading: false, user: action.payload, error: null };
      case 'LOGIN_USER_FAILURE':
      case 'REGISTER_USER_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
      case 'LOGOUT_USER':
        return { ...initialState }; 
      default:
        return state;
    }
  };
  
  export default authReducer;
  