import React, {useEffect} from 'react'

export const Scoreboard = ({score, best, helper}) => {

    useEffect (() => {

        }, []
      )

  return (
    <div className="scoreboard">
        <div className="score-txt">Current score: <strong className="score">{score}</strong></div>
        <div className ="helper">{helper}</div>
        <div className="score-txt">Best score: <strong className="score">{best}</strong></div>
    </div>
  )
}
