import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import DashBoard from "./components/dashboard/DashBoard";
import ProjectDetails from "./components/project/ProjectDetails";
import CreateProject from "./components/project/CreateProject";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/create" component={CreateProject} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
