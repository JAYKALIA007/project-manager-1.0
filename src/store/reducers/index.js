import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, //this reducer syncs our firestore-data with our state in the background
  firebase: firebaseReducer /*this is used to sync store state to the authentication status
  this syncs our auth status on firebase with our redux state*/,
});
export default rootReducer;
