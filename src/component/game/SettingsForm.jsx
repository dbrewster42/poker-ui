import { useState } from "react";
import "../login/Login.css"

const SettingsForm = props => {
    const [displayName] = useState(props.username);
    const [state, setState] = useState({
        displayName: displayName,
        numberOfPlayers: 4,
        isCustom : false
      })
    console.log(state)
    // const [displayName, setDisplayName] = useState(props.username);
    // const [numberOfPlayers, setNumberOfPlayers] = useState(4);
    // const [isCustom, setIsCustom] = useState(false);
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        console.log(state)
    }
    const sendSettings = e => {
        e.preventDefault();
        console.log("sending state", state)
        props.startGame(state)
    }

    return ( 
        <div id="form2">
            <form onSubmit={sendSettings}>
                Display Name <br />
                <input className="fields" type="text" name="displayName" onChange={handleChange} value={state.displayName} /><br />
                Number of Players<br />
                <input className="fields" type="number" name="numberOfPlayers" onChange={handleChange} value={state.numberOfPlayers} /><br />
                Do you want to use custom rules?<br />
                <input className="fields" type="checkbox" name="isCustom" onChange={handleChange} checked={state.isCustom} /><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default SettingsForm;