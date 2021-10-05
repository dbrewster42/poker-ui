import { useState } from "react";
import "./Form.css"

const SettingsForm = props => {
    const [displayName] = useState(props.username);
    const [state, setState] = useState({
        displayName: displayName,
        numberOfPlayers: 4,
        bigBlind: 5,
        // maxBet: null, only ask if isCustom = true
        fillWithComputerPlayers : true,
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
        <div id="form">
            <form onSubmit={(e) => sendSettings(e)}>
                Display Name <br />
                <input className="fields" type="text" name="displayName" onChange={handleChange} value={state.displayName} /><br />
                Number of Players<br />
                <input className="fields" type="number" name="numberOfPlayers" onChange={handleChange} value={state.numberOfPlayers} /><br />
                Big Blind<br />
                <input className="fields" type="number" name="bigBlind" onChange={handleChange} value={state.bigBlind} /><br />
                Fill Empty Slots with Computer Players?<br />
                <input className="fields" type="checkbox" name="fillWithComputerPlayers" onChange={handleChange} checked={state.fillWithComputerPlayers} /><br />
                Do you want to use custom rules?<br />
                <input className="fields" type="checkbox" name="isCustom" onChange={handleChange} checked={state.isCustom} /><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default SettingsForm;