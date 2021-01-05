export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    // make an async call to the database.
    // then go ahead and dispatch the action again.
    firestore
      .collection("projects")
      .add({
        ...project, //spread operator to add content and title that we get from the state in the CreateProject form
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authId,
        createdAt: new Date(),
      })

      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
