import { useState } from "react";
import "./Form.css"
import Service from "../../service/Service"


const Bet = props => {
    let [action, setAction] = useState();

    const placeBet = async e => {
        e.preventDefault();
        console.log(action)
        const data = await Service.bet(props.id, action);
        console.log("response", data)
    }

    const handleChange = e => {
        setAction(e.value)
        console.log(e.value)
    }


    return ( 
        <div id="form">
            <p>
                Current Pot : {props.pot}$
                Minimum Bet : {props.betAmount}$
            </p>
            
            <form onSubmit={placeBet}>
                
                <input className="fields" type="radio" name="action" onChange={handleChange} value={state.displayName} /><br />
                Number of Players<br />
                <input className="fields" type="number" name="numberOfPlayers" onChange={handleChange} value={state.numberOfPlayers} /><br />
                Big Blind<br />
                <input className="fields" type="number" name="bigBlind" onChange={handleChange} value={state.bigBlind} /><br />
                Fill Empty Slots with Computer Players?
                <input className="fields" type="checkbox" name="fillWithComputerPlayers" onChange={handleChange} checked={state.fillWithComputerPlayers} /><br />
                Do you want to use custom rules?<br />
                <input className="fields" type="checkbox" name="isCustom" onChange={handleChange} checked={state.isCustom} /><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Bet;