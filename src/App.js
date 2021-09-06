import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Main from "./component/game/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
             <Route exact path="/" component={Login} />
             <Route path="/game" component={Main} />
        </Switch>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
