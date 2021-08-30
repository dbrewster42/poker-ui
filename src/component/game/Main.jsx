import Game from "./Game"
import { useState } from "react";
import Service from "../../service/Service"


const Main = props => {
    const username = props.location.state.username;
    let [isBet, setIsBet] = useState(false);
    let [betOptions, setBetOptions] = useState();
    let [hasStarted, setHasStarted] = useState(false);
    let [id, setId] = useState(0);
    // const [players, setPlayers] = useState([])
    const [cards, setCards] = useState([])
    const [hand, setHand] = useState([])
    let players = [];

    const setVariables= data => {
        setHasStarted(true)
        setId(data.gameId)
        players = data.users
        // setPlayers([...data.users])
        setHand(data.hand)
        setIsBet(true)
        if (data.betOptions.name == username){
            setAndDisplayBetOptions(data)
        }
    }
    const setAndDisplayBetOptions = data => {
        setBetOptions(data.betOptions)
        displayBetOptions(data.betOptions);
    }
    const displayBetOptions = betOptions => {
        console.log("Your Bet Options are", betOptions.possibleActions )
        console.log(betOptions.betAmount)
    }
    const placeBet = async action => {
        const data = await Service.bet(id, action);
        if (data.data.isBet){
            const betOptions = await Service.getBetOptions(id);
            // setBetOptions(data.data.betOptions)
            if (betOptions.data.name == username){
                setAndDisplayBetOptions(betOptions.data)
                // setBetOptions(betOptions.data)
                // displayBetOptions(data.data.betOptions);
            }
            //setBetOptions(betOptions.data)
            //Service.getBetOptions(id, username);
        } else {
            setIsBet(false)
            //call deal in service?
            //FIXME
        }
        
        console.log("response", data)
    }

    return ( 
        <Game setVariables={setVariables} setAndDisplayBetOptions={setAndDisplayBetOptions} isBet={isBet} betOptions={betOptions} id={id} hasStarted={hasStarted} players={players} hand={hand} username={username} />
     );
}
 
export default Main;