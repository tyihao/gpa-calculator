export const IsLoggedInCall = (data: {email: string, password: string}) => {
  return { type: "IS_LOGGED_IN_CALL", payload: data}
}

export const SignUpCall = (data: {email: string, password: string}) => {
  return { type: "SIGN_UP_CALL", payload: data}
}

export const SignUpSuccessAction = () => {
  return { type: "SIGN_UP_SUCCESS"}
}

export const SignUpFailureAction = () => {
  return { type: "SIGN_UP_FAILURE"}
}

export const IsLoggedInSuccessAction = () => {
  return { type: "IS_LOGGED_IN_SUCCESS"}
}

export const IsLoggedInFailureAction = () => {
  return { type: "IS_LOGGED_IN_FAILURE"}
}

export const IsLoggedOutSuccessAction = () => {
  return { type: "IS_LOGGED_IN_FAILURE"}
}