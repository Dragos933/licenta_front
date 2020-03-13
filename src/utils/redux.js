/**
 * @description Generates action creator
 *
 * @param type: String
 * @returns Object
 */
export function actionCreator(type) {
  return (payload, path) => {
    let obj = {
      type
    };

    if (payload) {
      obj = { ...obj, payload };
    }

    if (path) {
      obj = { ...obj, path };
    }

    return obj;
  };
}

/**
 * @description Generates async action creator
 *
 * @param pending: String
 * @param success: String
 * @param error: String
 * @returns Object
 */
export function asyncActionCreator(pending, success, error) {
  return {
    pending: actionCreator(pending),
    success: actionCreator(success),
    error: actionCreator(error)
  };
}
