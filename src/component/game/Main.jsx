import Game from "./Game"
import { useState } from "react";
import Service from "../../service/Service"


const Main = props => {
    let [username, setUsername] = useState("")
    console.log(props.location)
    if (username === "" && props.location.state !== undefined){
        console.log("setting username", props.location.state)
        setUsername(props.location.state.username)
    }
    let [isBet, setIsBet] = useState(false);
    let [betOptions, setBetOptions] = useState();
    let [hasStarted, setHasStarted] = useState(false);
    let [id, setId] = useState(0);
    const [players, setPlayers] = useState([])
    const [hand, setHand] = useState([])
    const [cards, setCards] = useState([])
    const [betLog, setBetLog] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const deal = async (e) => {
        e.preventDefault();
        console.log("dealing")
        try {
            const data = await Service.deal(id);
            console.log(data)
            console.log("Dealt", data.data)
            setCards(data.data)
        } catch (err){
            console.error(err)
            setErrorMessage(err.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }    
        // const betOptions = await Service.getBetOptions(id);
    }

    const startGame = async (state) => {
        console.log("state", state)
        let body = { username, 
            displayName : state.displayName,
            numberOfPlayers : state.numberOfPlayers,
            fillWithComputerPlayers: state.fillWithComputerPlayers,
            isCustom: state.isCustom,
            bigBlind: state.bigBlind
         }
        console.log("request", body)
        try {
            const data = await Service.startGame(body);
            console.log("response body", data.data)
            setVariables(data.data);
        } catch (err){
            console.error(err)
            setErrorMessage(err.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }
    }

    const setVariables= data => {
        setPlayers(data.users);
        setHasStarted(true)
        setId(data.gameId)
        setHand(data.hand)
        // setPlayers([...data.users])
        console.log("BET OPTIONS", data.betOptions)
        if (data.betOptions.name === username){
            setBet(data.betOptions)
        } 
    }

    const getMyBetOptions = async e => {
        e.preventDefault()
        console.log("getting my betOptions")
        try {
            let data = await Service.getBetOptions(id)
            console.log(data.data)
            setBetLog(data.data.messages)
            // if (data.data.name !== username){
            //     data = await Service.getBetOptions(id);
            //     console.log("retrying betOptions retrieval", data.data)
            // }
            if (data.data.betOptions.betActive && data.data.betOptions.name === username){
                setBet(data.data.betOptions)
            }
        } catch (err){
            console.log(err)
            setErrorMessage(err.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }

    }

    const setBet = betOptions => {
        setBetOptions(betOptions)
        console.log("Your Bet Options are", betOptions)
        setIsBet(true)
    }

    const placeBet = async (action, betAmount) => {
        let body = {
            action,
            betAmount,
            username
        }
        console.log("Sending bet", body)
        try {
            const data = await Service.bet(id, body);
            setIsBet(false)
            console.log("Bet Response", data.data)
            setBetLog(data.data.messages)
            if (data.data.isBet){
                const betOptions = await Service.getBetOptions(id);
                console.log(betOptions.data)
                if (betOptions.data.name === username){
                    setBet(betOptions.data)
                } else {
                    throw Error("It should be the human's turn to bet")
                }
            }
                // else {
                //     //call deal in service?
                // }
            //} 
        } catch (err){
            console.error(err)
            setErrorMessage(err.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }
    }

    return ( 
        <Game startGame={startGame} deal={deal} placeBet={placeBet} getMyBetOptions={getMyBetOptions} isBet={isBet} betOptions={betOptions} id={id} hasStarted={hasStarted} hand={hand} username={username} cards={cards} betLog={betLog} showModal={showModal} errorMessage={errorMessage} players={players} />
     );
}
 
export default Main;