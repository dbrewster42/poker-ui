import Game from "./Game"
import { useState } from "react";
import Service from "../../service/Service"


const Main = props => {
    let [username, setUsername] = useState("")
    if (username === "" && props.location.state !== undefined){
        console.log("setting username", props.location.state)
        setUsername(props.location.state.username)
    }
    const [money, setMoney] = useState(0)
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
    const [isMax, setIsMax] = useState(false)
    const [isOver, setIsOver] = useState(false)
    const [showMessage, setShowMessage] = useState(true);
    const [endGameMessage, setEndGameMessage] = useState("")
    const [isMyTurn, setIsMyTurn] = useState(false)
    const [gameType, setGameType] = useState("TEXAS_HOLD_EM")
    let [isLastTurn, setIsLastTurn] = useState(false)
    let [width, setWidth] = useState("myInfo");


    const toggleBetModal = e => {
        setIsMax(e)
    }

    const startGame = async (state) => {
        console.log("state", state)
        setGameType(state.gameType);
        try {
            const data = await Service.startGame(state);
            console.log("response body", data.data)
            setVariables(data.data);
        } catch (err){
            console.log(err.response.data.message)
            setErrorMessage(err.response.data.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }
    }

    const setVariables = data => {
        console.log("setting vars", data)
        setPlayers(data.users);
        setHasStarted(true)
        setId(data.gameId)
        setHand(data.hand)
        if (data.hand.length > 2){
            setWidth("myStudInfo")
        }
    
        // setUserMoney(data.users)
        setMoney(data.userMoney)
        if (data.betOptions.name === username){
            console.log("still humming")
            setBet(data.betOptions)
        } 
    }

    const startNewRound = async e => {
        e.preventDefault();
        setIsOver(false)
        setCards([])
        try {
            const data = await Service.getNewRound(id, username);
            console.log("response body for RESTART", data.data)
            setVariables(data.data)
        } catch (err){
            console.log(err.response.data.message)
            setErrorMessage(err.response.data.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }
    }

    const deal = async e => {
        e.preventDefault();
        console.log("----------------------", id, username)
        try {
            const data = await Service.deal(id, username);
            console.log("Dealing", data.data)
            if (data.data.over){
                let info = data.data.endRoundResponse;
                console.log("this is the end", info)
                setEndGameMessage(info.message)
                setIsOver(true)
                setShowMessage(true)
                console.log("da end playas", info.activePlayers)
                setPlayers(...[info.activePlayers])
            } else {
                setIsBet(true)
                if (gameType === "SEVEN_CARD_STUD"){
                    setPlayers(data.data.playerDtos);
                    setIsLastTurn(data.data.isLastTurn)
                    setHand(data.data.cards)
                } else {
                    setCards(data.data.cards)
                }
            }
        } catch (err){
            console.log(err)
            console.log(err.response.data.message)
            setErrorMessage(err.response.data.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }    
    }

    const getMyBetOptions = async e => {
        e.preventDefault()
        console.log("getting my betOptions")
        try {
            let data = await Service.getBetOptions(id)
            console.log(data.data)
            setBetLog(data.data.messages)
            setIsBet(data.data.bet)
            // if (data.data.name !== username){
            //     data = await Service.getBetOptions(id);
            //     console.log("retrying betOptions retrieval", data.data)
            // }
            if (data.data.betOptions.betActive && data.data.betOptions.name === username){
                setBet(data.data.betOptions)
            }
        } catch (err){
            console.log(err.response.data.message)
            setErrorMessage(err.response.data.message)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }

    }

    const setBet = betOptions => {
        setBetOptions(betOptions)
        setIsMyTurn(true)
        console.log("Your Bet Options are", betOptions)
        setIsBet(true)
    }

    const placeBet = async (action, betAmount) => {
        let body = {
            action,
            betAmount,
            username
        }
        try {
            const data = await Service.bet(id, body);
            setIsMax(false)
            setMoney(data.data.userMoney)
            setIsMyTurn(false)
            console.log("Bet Response", data.data)
            setBetLog(data.data.messages)
            if (data.data.bet){
                const betOptions = await Service.getBetOptions(id);
                if (betOptions.data.name === username){
                    setBet(betOptions.data)
                }
            } else {
                setIsBet(false)
            }
        } catch (err){
            console.log(err.response.data.message)
            setErrorMessage(err.response.data.message)
            toggleBetModal(false)
            setShowModal(true)
            setTimeout(function(){
                setShowModal(false)
            }, (2500))
        }
    }

    return ( 
        <Game startGame={startGame} startNewRound={startNewRound} deal={deal} placeBet={placeBet} getMyBetOptions={getMyBetOptions} toggleBetModal={toggleBetModal} isBet={isBet} betOptions={betOptions} id={id} hasStarted={hasStarted} hand={hand} username={username} cards={cards} betLog={betLog} showModal={showModal} errorMessage={errorMessage} players={players} money={money} isMax={isMax} isOver={isOver} endGameMessage={endGameMessage} isMyTurn={isMyTurn} showMessage={showMessage} setShowMessage={setShowMessage} gameType={gameType} isLastTurn={isLastTurn} width={width} />
     );
}
 
export default Main;