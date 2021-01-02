export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    //perform async request and then dispatch the action accordingly
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
