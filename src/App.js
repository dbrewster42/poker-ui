import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Game from "./component/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
             <Route exact path="/" component={Login} />
             <Route path="/game" component={Game} />
        </Switch>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
