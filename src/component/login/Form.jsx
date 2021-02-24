import { useState } from "react";
import "./Login.css"
import Service from "../../service/Service"
// import { useHistory } from "react-router-dom";

const Form = props => {
    const [name, setName] = useState("Enter Your Unique Username");
    const [buyIn, setBuyIn] = useState(100);
    
    const headers =    {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }

    const createPlayer = async () => {
        console.log("creating player", name, buyIn)
        let body = {};
        body[name] = name;
        body[buyIn] = buyIn;
        const data = await Service.createNewPlayer(body, headers);
        //success or failure. boolean or string?
        props.setAuth(true)
    }
    const changeName = e => {
        setName(e.target.value)
    }
    const changeBuyIn = e => {
        setBuyIn(e.target.value)
    }

    return ( 
        <div id="form">
            <button class="cancel" onClick={props.toggleForm}>X</button>
            <form onSubmit={createPlayer}>
                <label for="name">Username </label>
                <input class="fields" type="text" name="name" onChange={changeName} value={name} /><br />
                <label for="buyin">Buy In $ </label>
                <input class="fields" type="number" name="buyin" onChange={changeBuyIn} value={buyIn} /><br />
                <input class="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Form;