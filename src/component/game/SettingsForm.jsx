import { useState } from "react";
import "./Form.css"

const SettingsForm = props => {
    const [displayName] = useState(props.username);
    const [state, setState] = useState({
        username: props.username,
        displayName: displayName,
        numberOfPlayers: 4,
        bigBlind: 5,
        buyIn: 100,
        ante: 0,
        // maxBet: null, only ask if isCustom = true
        fillWithComputerPlayers : true,
        hasJokers : false,
        gameType : "TEXAS_HOLD_EM"
      })
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
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
                Buy In<br />
                <input className="fields" type="number" name="buyIn" onChange={handleChange} value={state.buyIn} /><br />
                Ante<br />
                <input className="fields" type="number" name="ante" onChange={handleChange} value={state.ante} /><br />
                Fill Empty Slots with Computer Players?<br />
                <input className="fields" type="checkbox" name="fillWithComputerPlayers" onChange={handleChange} checked={state.fillWithComputerPlayers} /><br />
                Do you want to use wildcards?<br />
                <input className="fields" type="checkbox" name="isCustom" onChange={handleChange} checked={state.hasJokers} /><br />
                <select name="gameType" id="type"  onChange={handleChange}>
                    <option value="TEXAS_HOLD_EM">Texas Hold Em</option>
                    <option value="SEVEN_CARD_STUD">Seven Card Stud</option>
                </select>< br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default SettingsForm;