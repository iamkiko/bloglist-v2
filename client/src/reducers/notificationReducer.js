//action types
const SET_NOTIFICATION = "SET_NOTIFICATION"

//action creators for notifications
export const setNotification = ({ message, type }) => {
  return {
    type: SET_NOTIFICATION,
    data: { message, type },
  }
}

//notification reducer
const notificationReducer = (
  state = [{ message: null, type: null }],
  action,
) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.data
    default:
      return state
  }
}

export default notificationReducer
