import { useState } from "react";
import "./Login.css"
import Service from "../../service/Service"
// import { useHistory } from "react-router-dom";

const Form = props => {
    const [name, setName] = useState("Enter Your Unique Username");
    const [buyIn, setBuyIn] = useState(100);

    const createPlayer = async e => {
        e.preventDefault();
        console.log("creating player", name, buyIn)
        let body = {};
        body["username"] = name;
        body["money"] = buyIn;
        try {
            const data = await Service.createNewPlayer(body);
            console.log(data.data)
            console.log(data.data.body)
        } catch (err) {
            console.log(err.response.data)
            props.setErrorMessage(err.response.data.errMessage)
        }

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
            <button className="cancel" onClick={props.toggleForm}>X</button>
            <form onSubmit={createPlayer}>
                <label htmlFor="name">Username </label>
                <input className="fields" type="text" name="name" onChange={changeName} value={name} /><br />
                <label htmlFor="buyin">Buy In $ </label>
                <input className="fields" type="number" name="buyin" onChange={changeBuyIn} value={buyIn} /><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Form;