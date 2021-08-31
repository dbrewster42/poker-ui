import Game from "./Game"
import { useState } from "react";
import Service from "../../service/Service"


const Main = props => {
    // let [username, setUsername] = useState("user");
    let username;
    console.log(props.location)
    if (props.location.state !== undefined){
        console.log("setting username", props.location.state)
        // const username = props.location.state.username;
        username = props.location.state.username
        // setUsername(props.location.state.username)
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
        console.log("hi")
        // let body = { username }
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
            setAndDisplayBetOptions(data.betOptions)
        } else {
            getMyBetOptions();
        }
    }
    const getMyBetOptions = async () => {
        let betOptions = await Service.getBetOptions(id)
            while (betOptions.name !== username){
                betOptions = await Service.getBetOptions(id);
            }
            setAndDisplayBetOptions(betOptions)
    }
    const setAndDisplayBetOptions = betOptions => {
        setBetOptions(betOptions)
        displayBetOptions(betOptions);
        setIsBet(true)
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
        <Game setVariables={setVariables} setAndDisplayBetOptions={setAndDisplayBetOptions} deal={deal} isBet={isBet} betOptions={betOptions} id={id} hasStarted={hasStarted} players={players} hand={hand} username={username} cards={cards} />
     );
}
 
export default Main;