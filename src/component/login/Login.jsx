import React, { useState } from "react";
import "./Login.css";
import PlayerForm from "./PlayerForm";
import Instructions from "./Instructions";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Service from "../../service/Service"


const Login = () => {
    const [isExisting, setIsExisting] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [username, setUsername] = useState("Enter Your Unique Username");
    const [buyIn, setBuyIn] = useState(100);

    const setAuth = () => {
        setIsAuth(true);
        setShowForm(false)
    }

    const toggleFormForNew = () => {
        setShowForm(x => !x)
    }
    const toggleForm = () => {
        setIsExisting(true)
        setShowForm(x => !x)
    }

    const createPlayer = async e => {
        e.preventDefault();
        console.log("creating player", username, buyIn)
        let body = {};
        body["username"] = username;
        body["money"] = buyIn;
        try {
            const data = await Service.createNewPlayer(body);
            console.log(data.data)
            console.log(data.data.body)
        } catch (err) {
            console.log(err)
            setErrorMessage(err.response.data.errMessage)
        }

        //success or failure. boolean or string?
        setAuth(true)
    }

    const logIn = async e => {
        e.preventDefault()
        console.log("retrieving player", username, buyIn)
        let body = {};
        body["username"] = username;
        try {
            const data = await Service.signIn(body)
            console.log(data.data)
        } catch (err) {
            console.log(err)
            setErrorMessage(err.response.data.errMessage)
        }
        setAuth(true)
    }

    const changeName = e => {
        setUsername(e.target.value)
    }
    const changeBuyIn = e => {
        setBuyIn(e.target.value)
    }

    return ( 
        <div id="parent">
            <h1 id="header">Devon's Texas Hold 'Em</h1> 
            <Modal isOpen={showModal} id="modal"><h2>{errorMessage}</h2></Modal>
            <h2>Would You Like To Play A Game?</h2>
            {/* {isAuth && <button id="start"><Link to="/game">Start A Game</Link></button>} */}
            {isAuth ?
             <button id="start"><Link to={{ pathname: "/game", state: {username : username}}}>Join A Table</Link></button>
            :
              <div>
                    {showForm ? 
                        <PlayerForm toggleForm={toggleForm} setErrorMessage={setErrorMessage} changeBuyIn={changeBuyIn} changeName={changeName} createPlayer={createPlayer} isExisting={isExisting} logIn={logIn} /> :
                        <div>
                            <h1 className="big">?<span id="oversize">?</span>?</h1>
                            <button className="buttons" onClick={toggleFormForNew}>New Player</button>
                            <button className="buttons" onClick={toggleForm}>Returning Player</button>
                        </div>
                    }
                </div>
            }

            
     
            <Instructions />
        </div>
     );
}
 
export default Login;