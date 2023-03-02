import React from 'react'

export const Scoreboard = ({score, best, helper}) => {
  return (
    <div className="scoreboard">
        <div>Current score: <strong className="score">{score}</strong></div>
        <div className ="helper">{helper}</div>
        <div>Best score: <strong className="score">{best}</strong></div>
    </div>
  )
}
