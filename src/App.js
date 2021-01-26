import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
// import UserDetail from "../pages/UserDetail";
import UserPost from "./pages/PostDetail";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/PostDetail";
// import { FirebaseAuthContext } from "../context/AuthContext";

function App() {
  // const { currentUser } = useContext(FirebaseAuthContext);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route
          exact
          path="/post-detail"
          component={PostDetail}
        />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
