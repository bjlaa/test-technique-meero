import * as actions from './types';

export const fetchCats = () => {
  return (dispatch) => {
    // We fetch the data
    return fetch('https://api.thecatapi.com/v1/breeds', {
      mode: 'cors',
      headers: {
        'x-api-key': '59a0fe30-7dd6-46bc-86f6-fe4e6ff496d1',
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((responseParsed) => {
      // And pass it to our redux store
      dispatch({
        type: actions.SAVE_CATS,
        value: responseParsed
      });
    });
  }
}

export const toggleModal = (cat, history) => {
  console.log(cat)
  if (cat) {
    history.push('/modal');
    // We firstly save the cat object selected
    return {
      type: actions.SAVE_CAT_SELECTED,
      value: cat
    } 
  } else {
    history.push('/');
    // We firstly save the cat object selected
    return {
      type: actions.SAVE_CAT_SELECTED,
      value: false
    } 
  }
}