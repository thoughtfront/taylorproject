function session(state = {}, action) {
  switch (action.type) {
    case "SET_PERSON":
      return Object.assign({}, state, {person: action.person})
    case "EDIT_PERSON":
      return Object.assign({}, state, {person: action.person})
    default:
      return state
  }
}

export default session
