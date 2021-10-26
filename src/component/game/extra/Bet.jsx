import { useState } from "react";
import "../Form.css"


const Bet = props => {
    let [betAmount, setBetAmount] = useState(props.betOptions.betAmount);
    let [possibleActions] = useState(props.betOptions.possibleActions);
    let [isNeeded, setIsNeeded] = useState(false)
    let [action, setAction] = useState(possibleActions[0]);

    const beginBet = async e => {
        e.preventDefault();
        console.log(action)
        props.placeBet(action, betAmount)
    }

    const handleChange = e => {
        setAction(e.target.value)
        if (e.target.value === "RAISE" || e.target.value === "BET"){
            setIsNeeded(true)
        } else {
            setIsNeeded(false)
        }
        console.log(e.target.value)
    }

    const handleAmountChange = e => {
        setBetAmount(e.target.value)
    }


    return ( 
        <div id="betForm">
            <p>
                Current Pot : {props.betOptions.pot}$ <br />
                Minimum Bet : {betAmount}$
            </p>
            
            <form onSubmit={(e) => beginBet(e)}>
                <input type="radio" className="betFields" name="action" onChange={handleChange} value={possibleActions[0]} checked="checked" />
                <label className="betLabels">{possibleActions[0]}</label><br />
                <input type="radio" className="betFields" name="action" onChange={handleChange} value={possibleActions[1]} />
                <label className="betLabels">{possibleActions[1]}</label><br />
                <input type="radio" className="betFields" name="action" onChange={handleChange} value={possibleActions[2]} />
                <label className="betLabels">{possibleActions[2]}</label><br /><br />
                {/* {possibleActions[0]}
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[0]} /><br />
                {possibleActions[1]}
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[1]} /><br />
                {possibleActions[2]}
                <input className="fields" type="radio" name="action" onChange={handleChange} value={possibleActions[2]} /><br /> */}
                {isNeeded && <input className="fields" type="integer" name="betAmount" onChange={handleAmountChange} value={betAmount} />}<br />
                
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Bet;