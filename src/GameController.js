import React, {useState} from 'react'
import Game from './Game'


export const GameController = () => {

    const [gameFinished, setGameFinished] = useState(false)
    const [gameCount, setGameCount] = useState(1)

    let newGame = (e) => {
        setGameCount(e)
        setGameFinished(true)
    }

    if (gameFinished) {
        return (
            <div className="main-takeover">
                <div className="takeover">
                    <div>Congratulations</div>
                    <div>You won!!!</div>
                    <button onClick={() => setGameFinished(false)}>Try again?</button>
                </div>
            </div>
        )
        }
    return (
        <Game count={gameCount} key={gameCount} newGame={newGame}/>
    )
}
