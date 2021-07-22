import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>
          <Route path='/details/:id'>
            <ReviewDetails/>
          </Route>
          <Route path='/category/:id'>
            <Category/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
