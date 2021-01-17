const initState = {
  projects: [
    { id: 1, title: "collect all the stars", content: "bla bla bla" },
    { id: 2, title: "go for an egg hunt", content: "bla bla bla" },
    { id: 3, title: "start the year happily", content: "bla bla bla" },
    { id: 4, title: "end the year on a high note", content: "bla bla bla" },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      // console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      // console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
