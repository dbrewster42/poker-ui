import { useState } from "react";
import "../login/Login.css"

const SettingsForm = props => {
    const [state, setState] = useState({
        displayName: props.username,
        numberOfPlayers: 4,
        isCustom : false
      })
    // const [displayName, setDisplayName] = useState(props.username);
    // const [numberOfPlayers, setNumberOfPlayers] = useState(4);
    // const [isCustom, setIsCustom] = useState(false);
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }


    return ( 
        <form onSubmit={props.startGame}>
            <label htmlFor="displayName">Display Name</label>
            <input className="fields" type="text" name="displayName" onChange={handleChange} value={state.displayName} /><br />
            Number of Players
            <input className="fields" type="number" name="numberOfPlayers" onChange={handleChange} value={state.numberOfPlayers} /><br />
            Do you want to use custom rules?
            <input className="fields" type="checkbox" name="isCustom" onChange={handleChange} checked={state.displayName} /><br />
            <input className="submit" type="submit" value="Submit" />
        </form>
     );
}
 
export default SettingsForm;