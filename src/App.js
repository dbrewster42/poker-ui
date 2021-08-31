import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Main from "./component/game/Main";
import { useState } from "react";

function App() {
    // const [username, setUsername] = useState("Enter Your Unique Username");  

    // const changeName = e => {
    //     setUsername(e.target.value)
    //     console.log("set username", e.target.value)
    // }

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
