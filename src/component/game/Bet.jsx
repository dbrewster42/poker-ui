import { useState } from "react";
import "./Form.css"
// import Service from "../../service/Service"


const Bet = props => {
    console.log(props)
    let [action, setAction] = useState();
    let [betAmount, setBetAmount] = useState(props.betOptions.betAmount);
    let [possibleActions] = useState(props.betOptions.possibleActions)

    const beginBet = async e => {
        e.preventDefault();
        console.log(action)
        props.placeBet(action, betAmount)
    }

    const handleChange = e => {
        setAction(e.target.value)
        console.log(e)
    }

    const handleAmountChange = e => {
        setBetAmount(e.target.value)
    }


    return ( 
        <div id="betForm">
            <p>
                Current Pot : {props.betOptions.pot}$ <br />
                Minimum Bet : {props.betOptions.betAmount}$
            </p>
            
            <form onSubmit={(e) => beginBet(e)}>
                <label className="betLabels">{possibleActions[0]}</label>
                <input type="radio" className="betFields" name="action" onChange={handleChange} value={possibleActions[0]} /><br />
                <label className="betLabels">{possibleActions[1]}</label>
                <input type="radio" className="betFields" name="action" onChange={handleChange} value={possibleActions[1]} /><br />
                <label className="betLabels">{possibleActions[2]}</label>
                <input type="radio" className="betFields" name="action" onChange={handleChange} value={possibleActions[2]} /><br />
                {/* {possibleActions[0]}
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[0]} /><br />
                {possibleActions[1]}
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[1]} /><br />
                {possibleActions[2]}
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[2]} /><br /> */}
                <input className="fields" type="integer" name="betAmount" onChange={handleAmountChange} value={betAmount} /><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Bet;