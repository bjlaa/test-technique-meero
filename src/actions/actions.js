import * as actions from './types';

export const fetchCats = () => {
  return (dispatch) => {
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
      console.log(responseParsed)
      dispatch({
        type: actions.SAVE_CATS,
        value: responseParsed
      });
    });
  }
}