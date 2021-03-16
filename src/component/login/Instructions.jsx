import "./Login.css";

const Instructions = () => {
    return ( 
        <div>
            <h1 className="subheaders">Instructions</h1>
            {/* <p>  ***  ***  Copied from https://bicyclecards.com/how-to-play/texas-holdem-poker/ *** ***</p> */}
            <h2>Poker Hands</h2>
            <ol>These hands are listed from best to worst. <br /> <br />
                <li><strong><em>Royal Flush</em></strong> - this is the highest possible hand. A straight flush consists of the Ace, King, Queen, Jack, 10 all of the same suit. It is the straight flush with the highest possible cards</li>
                <li><strong><em>Five of a Kind</em></strong> - This can occur only where at least one card is wild, such as a joker. Examples of five of a kind would be four 10s and a wild card or two queens and three wild cards.</li>
                <li><strong><em>Straight Flush</em></strong> A straight flush consists of five cards of the same suit in sequence, such as 10, 9, 8, 7, 6 of hearts.</li>
                <li><strong><em>Four of a Kind</em></strong> - Four of the same card. An example is four aces or four 3s.</li>
                <li><strong><em>Full House</em></strong> - This hand is made up of three cards of one rank and two cards of another rank, such as three 8s and two 4s.</li>
                <li><strong><em>Flush</em></strong> - Five cards all of the same suit, but not in sequence, is a flush. An example is Q, 10, 7, 6, and 2 of clubs.</li>
                <li><strong><em>Straight</em></strong> - Five cards in sequence, but not all of the same suit is a straight. An example is 9♥, 8♣, 7♠, 6♦, 5♥.</li>
                <li><strong><em>Three of a Kind</em></strong> - This combination contains three cards of the same rank, and the other two cards each of a different rank, such as three jacks, a seven, and a four.</li>
                <li><strong><em>Two Pairs</em></strong> - This hand contains a pair of one rank and another pair of a different rank, plus any fifth card of a different rank, such as Q, Q, 7, 7, 4.</li>
                <li><strong><em>One Pair</em></strong> - This frequent combination contains just one pair with the other three cards being of different rank. An example is 10, 10, K, 4, 3.</li>
                <li><strong><em>High Card</em></strong> - This very common hand contains "nothing." None of the five cards pair up, nor are all five cards of the same suit or consecutive in rank. When more than one player has no pair, the hands are rated by the highest card each hand contains, so that an ace-high hand beats a king-high hand, and so on. If both player's high card is equal, then it goes to the second highest card ie King + 8 beats King + 7</li>   


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
            
            <p>
            In Hold'em, each player is dealt two private cards (known as ‘hole cards’) that belong to them alone. Five community cards are dealt face-up, to form the ‘board’. All players
            in the game use these shared community cards in conjunction with their own hole cards to each make their best possible five-card poker hand. In Hold'em, a player may use any combination of the seven cards available to make the best possible five-card poker hand, using zero, one or two of their private hole cards.
            </p>
            <h4>The Blinds</h4>
            {/* SEE HERE */}
            <p>In Hold'em, a marker called ‘the button’ or ‘the dealer button’ indicates which player is the dealer for the current game. Before the game begins, the player immediately clockwise from the button posts the "small blind", the first forced bet. The player immediately clockwise from the small blind posts the "big blind", which is typically twice the size of the small blind, but the blinds can vary depending on the stakes and betting structure being played.</p>
            <p>In Limit games, the big blind is the same as the small bet, and the small blind is typically half the size of the big blind but may be larger depending on the stakes. For example, in a $2/$4 Limit game the small blind is $1 and the big blind is $2. In a $15/$30 Limit game, the small blind is $10 and the big blind is $15.

            </p>
            <p>In Pot Limit and No Limit games, the games are referred to by the size of their blinds (for example, a $1/$2 Hold’em game has a small blind of $1 and a big blind of $2).

            </p>
            <p>Depending on the exact structure of the game, each player may also be required to post an ‘ante’ (another type of forced bet, usually smaller than either blind, posted by all players at the table) into the pot.

            </p>
            <p>Now, each player receives his or her two hole cards. Betting action proceeds clockwise around the table, starting with the player ‘under the gun’ (immediately clockwise from the big blind).

            </p>
            <h4>Player Betting Options</h4>
            <p>In Hold'em, as with other forms of poker, the available actions are ‘fold’, ‘check’, ‘bet’, ‘call’ or ‘raise’. Exactly which options are available depends on the action taken by the previous players. If nobody has yet made a bet, then a player may either check (decline to bet, but keep their cards) or bet. If a player has bet, then subsequent players can fold, call or raise. To call is to match the amount the previous player has bet. To raise is to not only match the previous bet, but to also increase it.</p>

            <h4>Pre-Flop</h4>
            <p>
                After seeing his or her hole cards, each player now has the option to play his or her hand by calling or raising the big blind. The action begins to the left of the big blind, which is considered a ‘live’ bet on this round. That player has the option to fold, call or raise. For example, if the big blind was $2, it would cost $2 to call, or at least $4 to raise. Action then proceeds clockwise around the table.

                Betting continues on each betting round until all active players (who have not folded) have placed equal bets in the pot.
            </p>
            <h4>The Flop</h4>
            <p>Now, three cards are dealt face-up on the board. This is known as ‘the flop’. In Hold'em, the three cards on the flop are community cards, available to all players still in the hand. Betting on the flop begins with the active player immediately clockwise from the button. The betting options are similar to pre-flop, however if nobody has previously bet, players may opt to check, passing the action to the next active player clockwise.</p>
            <h4>The Turn</h4>
            <p>When the betting action is completed for the flop round, the ‘turn’ is dealt face-up on the board. The turn is the fourth community card in Hold'em (and is sometimes also called ‘Fourth Street’). Another round of betting ensues, beginning with the active player immediately clockwise from the button.

            </p>
            <h4>The River</h4>
            <p>When betting action is completed for the turn round, the ‘river’ or ‘Fifth Street’ is dealt face-up on the board. The river is the fifth and final community card in a Hold'em game. Betting again begins with the active player immediately clockwise from the button, and the same betting rules apply as they do for the flop and turn, as explained above.</p>
            <h4>The Showdown</h4>
            <p>If there is more than one remaining player when the final betting round is complete, the last person to bet or raise shows their cards, unless there was no bet on the final round in which case the player immediately clockwise from the button shows their cards first. The player with the best five-card poker hand wins the pot. In the event of identical hands, the pot will be equally divided between the players with the best hands. Hold'em rules state that all suits are equal.</p>
            <p>After the pot is awarded, a new hand of Hold'em is ready to be played. The button now moves clockwise to the next player, blinds and antes are once again posted, and new hands are dealt to each player.

            </p>
        </div>
     );
}
 
export default Instructions;