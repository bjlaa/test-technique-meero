import * as actions from '../actions/types'

const initialState = {
  cats: [],
  selectedCat: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SAVE_CATS:
      return Object.assign({}, state, { cats: action.value })

    case actions.SAVE_CAT_SELECTED:
      return Object.assign({}, state, { selectedCat: action.value })

    default:
      return state;
  }
}