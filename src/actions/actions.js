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
      const promises = [];
      const cats2 = [];
      responseParsed.forEach((element) => {
        if (element.wikipedia_url === null) return 

        const urlDecoded = element.wikipedia_url.split('/');

        const promise = fetch(`https://en.wikipedia.org/api/rest_v1/page/media/${urlDecoded[urlDecoded.length - 1]}`)
        .then(r => r.json())
        .then((responseImgParsed) => {
          if (responseImgParsed.items[0]) {
            const image = responseImgParsed.items[0].original.source

            element.image = image;          
          }


          fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${urlDecoded[urlDecoded.length - 1]}`)
          .then(rr => rr.json())
          .then((responseDescParsed) => {
            const desc = responseDescParsed.extract;

            element.description = desc;

            cats2.push(element);
          })
        })

        promises.push(promise);
      });

      return Promise.all(promises)
      .then(() => {
        // And pass it to our redux store
        dispatch({
          type: actions.SAVE_CATS,
          value: cats2
        });

        const origins = [];

        responseParsed.forEach((element) => {
          if (origins.indexOf(element.origin) <= -1) {
            origins.push(element.origin);
          }
        });

        dispatch({
          type: actions.SAVE_ORIGINS,
          value: origins
        })
      })
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

export const filterCats = (origin) => {
  return (dispatch, getState) => {
    const state = getState();

    const originsToShow = Array.from(state.mainReducer.originsToShow);

    const index = originsToShow.indexOf(origin);

    if (index <= -1) {
      originsToShow.push(origin);
      
    } else {
      originsToShow.splice(index, 1);
    }

    dispatch({
      type: actions.SAVE_ORIGINS_TO_SHOW,
      value: originsToShow
    })
  }

}
