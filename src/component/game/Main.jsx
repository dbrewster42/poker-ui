import Game from "./Game"
import { useState } from "react";
import Service from "../../service/Service"


const Main = props => {
    console.log(props)

    let [username, setUsername] = useState();
    // const username = props.username
    let [isBet, setIsBet] = useState(false);
    let [betOptions, setBetOptions] = useState();
    let [hasStarted, setHasStarted] = useState(false);
    let [id, setId] = useState(0);
    const [players, setPlayers] = useState([])
    // let players = [];
    const [cards, setCards] = useState([])
    const [hand, setHand] = useState([])
    // if (props.location.state != undefined){
    //     console.log("setting username")
    //     setUsername(props.location.state.username);
    //  }

    const setVariables= (data, name) => {
        setUsername(name)
        setHasStarted(true)
        setId(data.gameId)
        let players = data.users
        setPlayers([...players])
        // setPlayers([...data.users])
        setHand(data.hand)
        if (data.betOptions.name === username){
            setAndDisplayBetOptions(data)
        }
    }
    const setAndDisplayBetOptions = data => {
        setIsBet(true)
        setBetOptions(data.betOptions)
        displayBetOptions(data.betOptions);
    }
    const displayBetOptions = betOptions => {
        console.log("Your Bet Options are", betOptions.possibleActions )
        console.log(betOptions.betAmount)
    }

    const deal = async (e) => {
        e.preventDefault();
        console.log("hi")
        // let body = { username }
        const data = await Service.deal(id);
        console.log(data)
        console.log("Dealt", data.data)
        setCards(data.data)
    }

    const placeBet = async action => {
        const data = await Service.bet(id, action);
        if (data.data.isBet){
            const betOptions = await Service.getBetOptions(id);
            // setBetOptions(data.data.betOptions)
            if (betOptions.data.name === username){
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
        <Game setVariables={setVariables} setAndDisplayBetOptions={setAndDisplayBetOptions} setUsername={setUsername} deal={deal} isBet={isBet} betOptions={betOptions} id={id} hasStarted={hasStarted} players={players} hand={hand} cards={cards} username={username} />
     );
}
 
export default Main;