export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
      .then(function(response) {

        const newAction = { ...action, payload: response };
        dispatch(newAction);

      }).catch(function(response){

        if (response.status === 422 || response.status === 400 ) {
          const newAction = {
            type: 'SET_MESSAGE',
            payload: response.data.error || "undefined error"
          }
          dispatch(newAction);
        }

        if (response.status === 401) {
          const newAction = {
            type: 'SET_MESSAGE',
            payload: 'Unauthorized'
          }
          dispatch(newAction);
        }

      });
  }
}
