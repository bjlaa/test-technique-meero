import * as actions from '../actions/types'

const initialState = {
  cats: [],
  selectedCat: false,
  originsToShow: [],
  origins: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SAVE_CATS:
      return Object.assign({}, state, { cats: action.value });

    case actions.SAVE_CAT_SELECTED:
      return Object.assign({}, state, { selectedCat: action.value });

    case actions.SAVE_ORIGINS_TO_SHOW:
      return Object.assign({}, state, { originsToShow: action.value });

    case actions.SAVE_ORIGINS:
      return Object.assign({}, state, { origins: action.value });

    default:
      return state;
  }
}