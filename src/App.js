import Signup from './signUp/signup';
import { Route, Switch } from "react-router-dom";
import DashBoard from './signUp/dashBoard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Switch>
     
    </div>
  );
}

export default App;
