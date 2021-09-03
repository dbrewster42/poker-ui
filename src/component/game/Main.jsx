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
    const [betLog, setBetLog] = useState([])
    let players = [];
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
            setErrorMessage(err.response.data.errMessage)
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
            setErrorMessage(err.response.data.errMessage)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }

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
            setBet(data.betOptions)
        } else {
            getMyBetOptions();
        }
    }

    const getMyBetOptions = async () => {
        console.log("getting my betOptions")
        try {
            let betOptions = await Service.getBetOptions(id)
            console.log(betOptions)
            if (betOptions.name !== username){
                betOptions = await Service.getBetOptions(id);
                console.log("retrying betOptions retrieval", betOptions)
            }
            setBet(betOptions)
        } catch (err){
            console.log(err)
            setErrorMessage(err.response.data.errMessage)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }

    }

    const setBet = betOptions => {
        setBetOptions(betOptions)
        console.log("Your Bet Options are", betOptions.possibleActions )
        console.log(betOptions.betAmount)
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
            setBetLog(data.data.bets)
            if (data.data.isBet){
                const betOptions = await Service.getBetOptions(id);
                console.log(betOptions.data)
                if (betOptions.data.name === username){
                    setBet(betOptions.data)
                }
            }
                // else {
                //     //call deal in service?
                //     //FIXME
                // }
            //} 
        } catch (err){
            console.log(err)
            console.log(err.response)
            console.log(err.data)
            setErrorMessage(err.response.data.errMessage)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }
    }

    return ( 
        <Game startGame={startGame} deal={deal} isBet={isBet} betOptions={betOptions} id={id} hasStarted={hasStarted} players={players} hand={hand} username={username} cards={cards} betLog={betLog} showModal={showModal} errorMessage={errorMessage} placeBet={placeBet} />
     );
}
 
export default Main;