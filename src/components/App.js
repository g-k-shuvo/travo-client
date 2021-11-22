import "../styles/bootstrap.min.css";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Details from "../pages/Details";
import About from "../pages/About";
import Team from "../pages/Team";
import Error from "./Error";
import MyBookings from "../pages/MyBookings";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AuthProvider from "../contexts/AuthProvider";
import AllBookings from "../pages/AllBookings";
import AddTour from "../pages/AddTour";
import PrivateRoute from "../routes/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/team" exact component={Team} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />

            <PrivateRoute exact path="/tours/:id">
              <Details />
            </PrivateRoute>

            <PrivateRoute exact path="/mybookings/:email">
              <MyBookings />
            </PrivateRoute>

            <PrivateRoute exact path="/allbookings">
              <AllBookings />
            </PrivateRoute>

            <PrivateRoute exact path="/addtour">
              <AddTour />
            </PrivateRoute>

            <Route path="*" component={Error} />
          </Switch>

          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
