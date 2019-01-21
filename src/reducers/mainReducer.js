import * as actions from '../actions/types'

const initialState = {
  cats: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SAVE_CATS:
      return Object.assign({}, state, { cats: action.value })

    default:
      return state;
  }
}