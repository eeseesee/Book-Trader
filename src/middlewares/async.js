export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
      .then(function(response) {

        console.log('success payload',response);

        const newAction = { ...action, payload: response };
        dispatch(newAction);

      }).catch(function(response){

        console.log('failure payload',response);

        if (response.status === 422) {
          const newAction = {
            type: 'SET_MESSAGE',
            payload: response.data.error
          }
          dispatch(newAction);
        }

        if (response.status === 401) {
          const newAction = {
            type: 'SET_MESSAGE',
            payload: 'Incorrect email or password.'
          }
          dispatch(newAction);
        }

      });
  }
}
