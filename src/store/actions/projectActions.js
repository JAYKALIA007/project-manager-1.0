export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    // make async call to database.
    // then go ahead and dispatch the action again.
    firestore
      .collection("projects")
      .add({
        ...project, //spread operator to add content and title that we get from the state in the CreateProject form
        authorFirstName: "Jay",
        authorLastName: "Kalia",
        authorId: 12345,
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
