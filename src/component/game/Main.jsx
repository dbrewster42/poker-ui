import Game from "./Game"
import { useState } from "react";
import Service from "../../service/Service"


const Main = props => {
    let username;
    console.log(props.location)
    if (props.location.state !== undefined){
        console.log("setting username", props.location.state)
        username = props.location.state.username
    }
    let [isBet, setIsBet] = useState(false);
    let [betOptions, setBetOptions] = useState();
    let [hasStarted, setHasStarted] = useState(false);
    let [id, setId] = useState(0);
    // const [players, setPlayers] = useState([])
    const [cards, setCards] = useState([])
    const [hand, setHand] = useState([])
    let players = [];

    const deal = async (e) => {
        e.preventDefault();
        console.log("dealing")
        const data = await Service.deal(id);
        console.log(data)
        console.log("Dealt", data.data)
        setCards(data.data)
        // const betOptions = await Service.getBetOptions(id);
    }

    const setVariables= data => {
        setHasStarted(true)
        setId(data.gameId)
        players = data.users
        // setPlayers([...data.users])
        setHand(data.hand)
        // setIsBet(true)
        console.log("BET OPTIONS", data.betOptions)
        if (data.betOptions.name === username){
            setBetOptions(data.betOptions)
        } else {
            getMyBetOptions();
        }
    }

    const getMyBetOptions = async () => {
        console.log("getting my betOptions")
        let betOptions = await Service.getBetOptions(id)
        console.log(betOptions)
        while (betOptions.name !== username){
            betOptions = await Service.getBetOptions(id);
        }
        setBetOptions(betOptions)
    }

    const setBetOptions = betOptions => {
        setBetOptions(betOptions)
        console.log("Your Bet Options are", betOptions.possibleActions )
        console.log(betOptions.betAmount)
        setIsBet(true)
    }

    const placeBet = async action => {
        const data = await Service.bet(id, action);
        if (data.data.isBet){
            const betOptions = await Service.getBetOptions(id);
            // setBetOptions(data.data.betOptions)
            if (betOptions.data.name === username){
                setBetOptions(betOptions.data)
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
        <Game setVariables={setVariables} deal={deal} isBet={isBet} betOptions={betOptions} id={id} hasStarted={hasStarted} players={players} hand={hand} username={username} cards={cards} />
     );
}
 
export default Main;