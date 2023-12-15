import { combineReducers } from 'redux'

export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const copy = Array.from(state)
      copy.push(action.payload.text)
      return copy

    default:
      return state
  }
}

const reducers = combineReducers({
  todos,
})
