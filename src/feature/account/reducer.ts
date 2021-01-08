import { 
  LoginState, 
  IS_LOGGED_IN_SUCCESS, 
  IS_LOGGED_IN_FAILURE, 
  IS_LOGGED_OUT,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './types'

const initialState: LoginState = {
  isLoggedIn: false,
};


export const login = (state = initialState, action: any) => {
  let nextState = {}

  switch(action.type) {
    case IS_LOGGED_IN_SUCCESS:
      nextState = {
        isLoggedIn: true,
      }
      break
    case IS_LOGGED_IN_FAILURE:
      nextState = {
        isLoggedIn: false,
      }
      break
    case IS_LOGGED_OUT:
      nextState = initialState;
      break
    case SIGN_UP_SUCCESS:
      nextState = {
        isLoggedIn: true,
      }
      break
    case SIGN_UP_FAILURE:
      nextState = {
        isLoggedIn: false,
      }
      break
    default:
      return state
  }
  return {...state, ...nextState}
}