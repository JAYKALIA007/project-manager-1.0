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
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "SIGNOUT_SUCCESS" }));
  };
};
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //perform an async request and then dispatch an action creator accordingly
    const firebase = getFirebase();
    const firestore = getFirestore();

    /*we'll perform 2 async requests, first signup the user and then
      register the userdata on the database as well. 
    */

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
