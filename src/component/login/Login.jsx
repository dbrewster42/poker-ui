import React, { useState } from "react";
import "./Login.css"
import Form from "./Form"
import { Link } from "react-router-dom";

const Login = () => {
    const [showForm, setShowForm] = useState(false)
    const [isAuth, setIsAuth] = useState(false)

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
            <h2>Would You Like To Play A Game</h2>
            {isAuth && <button id="start"><Link to="/game">Start A Game</Link></button>}
            {showForm ? 
                <Form toggleForm={toggleForm} setAuth={setAuth} /> :
                <div>
                    <h1 class="big">?<span id="oversize">?</span>?</h1>
                    <button class="buttons" onClick={toggleForm}>New Player</button>
                    <button class="buttons">Returning Player</button>
                </div>
            }
     
            <h2>Poker Hands</h2>
            <ol>These hands are listed from best to worst. 
                <li><strong>Royal Flush</strong> - this is the highest possible hand. A straight flush consists of the Ace, King, Queen, Jack, 10 all of the same suit. It is the straight flush with the highest possible cards</li>
                <li><strong>Five of a Kind</strong> - This is the second highest possible hand and can occur only where at least one card is wild, such as a joker. Examples of five of a kind would be four 10s and a wild card or two queens and three wild cards.</li>
                <li><strong>Straight Flush</strong> - This is the third highest possible hand. A straight flush consists of five cards of the same suit in sequence, such as 10, 9, 8, 7, 6 of hearts.</li>
                <li><strong>Four of a Kind</strong> - This is the next highest hand. An example is four aces or four 3s.</li>
                <li><strong>Full House</strong> - This colorful hand is made up of three cards of one rank and two cards of another rank, such as three 8s and two 4s.</li>
                <li><strong>Flush</strong> - Five cards all of the same suit, but not all in sequence, is a flush. An example is Q, 10, 7, 6, and 2 of clubs.</li>
                <li><strong>Straight </strong> - Five cards in sequence, but not all of the same suit is a straight. An example is 9♥, 8♣, 7♠, 6♦, 5♥.</li>
                <li><strong>Three of a Kind</strong> - This combination contains three cards of the same rank, and the other two cards each of a different rank, such as three jacks, a seven, and a four.</li>
                <li><strong>Two Pairs</strong> - This hand contains a pair of one rank and another pair of a different rank, plus any fifth card of a different rank, such as Q, Q, 7, 7, 4.</li>
                <li><strong>One Pair</strong> - This frequent combination contains just one pair with the other three cards being of different rank. An example is 10, 10, K, 4, 3.</li>
                <li><strong>High Card</strong> - This very common hand contains "nothing." None of the five cards pair up, nor are all five cards of the same suit or consecutive in rank. When more than one player has no pair, the hands are rated by the highest card each hand contains, so that an ace-high hand beats a king-high hand, and so on.</li>   


            </ol>
            <h2>Instructions</h2>
            <h3>The Deal</h3>
            <p>
                The standard 52 card pack is used.
            </p>
            <p>Every player is dealt two cards, for their eyes only.</p>
            <p>
                The dealer spreads five cards - three at once, then another, then another -
                which can be used by all players to make their best possible five-card hand.
            </p>
            <h3>The Play</h3>
            <p>Copied from https://bicyclecards.com/how-to-play/texas-holdem-poker/</p>
            <p>
            In Hold'em, each player is dealt two private cards (known as ‘hole cards’) that belong to them alone. Five community cards are dealt face-up, to form the ‘board’. All players
            in the game use these shared community cards in conjunction with their own hole cards to each make their best possible five-card poker hand. In Hold'em, a player may use any combination of the seven cards available to make the best possible five-card poker hand, using zero, one or two of their private hole cards.
            </p>
            <h4>The Blinds</h4>
            <p>In Hold'em, a marker called ‘the button’ or ‘the dealer button’ indicates which player is the dealer for the current game. Before the game begins, the player immediately clockwise from the button posts the "small blind", the first forced bet. The player immediately clockwise from the small blind posts the "big blind", which is typically twice the size of the small blind, but the blinds can vary depending on the stakes and betting structure being played.</p>
            <p>In Limit games, the big blind is the same as the small bet, and the small blind is typically half the size of the big blind but may be larger depending on the stakes. For example, in a $2/$4 Limit game the small blind is $1 and the big blind is $2. In a $15/$30 Limit game, the small blind is $10 and the big blind is $15.

            </p>
            <p>In Pot Limit and No Limit games, the games are referred to by the size of their blinds (for example, a $1/$2 Hold’em game has a small blind of $1 and a big blind of $2).

            </p>
            <p>Depending on the exact structure of the game, each player may also be required to post an ‘ante’ (another type of forced bet, usually smaller than either blind, posted by all players at the table) into the pot.

            </p>
            <p>Now, each player receives his or her two hole cards. Betting action proceeds clockwise around the table, starting with the player ‘under the gun’ (immediately clockwise from the big blind).

            </p>
        </div>
     );
}
 
export default Login;