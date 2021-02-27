import React, { useState } from "react";
import "./Login.css";
import Form from "./Form";
import Instructions from "./Instructions";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const Login = () => {
    const [showForm, setShowForm] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const setAuth = () => {
        setIsAuth(true);
        setShowForm(false)
    }

    const toggleForm = () => {
        setShowForm(x => !x)
    }

    return ( 
        <div id="parent">
            <h1 id="header">Devon's Texas Hold 'Em</h1> 
            <Modal isOpen={showModal} id="modal"><h2>{errorMessage}</h2></Modal>
            <h2>Would You Like To Play A Game</h2>
            {isAuth && <button id="start"><Link to="/game">Start A Game</Link></button>}
            {showForm ? 
                <Form toggleForm={toggleForm} setAuth={setAuth} setErrorMessage={setErrorMessage} /> :
                <div>
                    <h1 className="big">?<span id="oversize">?</span>?</h1>
                    <button className="buttons" onClick={toggleForm}>New Player</button>
                    <button className="buttons">Returning Player</button>
                </div>
            }
     
            <Instructions />
        </div>
     );
}
 
export default Login;