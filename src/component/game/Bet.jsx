import { useState } from "react";
import "./Form.css"
// import Service from "../../service/Service"


const Bet = props => {
    let [action, setAction] = useState();
    let [possibleActions] = useState(props.betOptions.possibleActions)

    const beginBet = async e => {
        e.preventDefault();
        console.log(action)
        props.placeBet(action)
    }

    const handleChange = e => {
        setAction(e.target.value)
        console.log(e)
    }


    return ( 
        <div id="form">
            <p>
                Current Pot : {props.pot}$
                Minimum Bet : {props.betAmount}$
            </p>
            
            <form onSubmit={(e) => beginBet(e)}>
                {possibleActions[0]}<br />
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[0]} /><br />
                {possibleActions[1]}<br />
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[1]} /><br />
                {possibleActions[2]}<br />
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[2]} /><br />
               
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Bet;