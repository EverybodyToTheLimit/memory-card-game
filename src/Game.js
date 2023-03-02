import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import { Scoreboard } from "./Components/Scoreboard";
import "./Game.css"


const Game = () => {
    const [catPics, setCatPics] = useState([]);
    const [helper, setHelper] = useState([]);
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState(
      [ {cardName: "card1", id: 1, clicked: false, image: ""},
        {cardName: "card2", id: 2, clicked: false, image: ""},
        {cardName: "card3", id: 3, clicked: false, image: ""},
        {cardName: "card4", id: 4, clicked: false, image: ""},
        {cardName: "card5", id: 5, clicked: false, image: ""},
        {cardName: "card6", id: 6, clicked: false, image: ""},
        {cardName: "card7", id: 7, clicked: false, image: ""},
        {cardName: "card8", id: 8, clicked: false, image: ""},
        {cardName: "card9", id: 9, clicked: false, image: ""},
        {cardName: "card10", id: 10, clicked: false, image: ""},
        {cardName: "card11", id: 11, clicked: false, image: ""},
        {cardName: "card12", id: 12, clicked: false, image: ""},
    ]
    )

    useEffect (() => {
      getResponse()
      }, []
    )

    const getResponse = async() => {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_fRBPkuqZuzWGfFTEaO5HrliXtxOuq6xQknWkubLOqyBIZUo4baorURksbK6FUe9B',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'live_fRBPkuqZuzWGfFTEaO5HrliXtxOuq6xQknWkubLOqyBIZUo4baorURksbK6FUe9B'
          }
        }
      );
      const data = await response.json(); // Extracting data as a JSON Object from the response
      let tempArray = JSON.parse(JSON.stringify(cards))
      for (let i=0; i<data.length; i++) {
        tempArray[i].image = data[i].url
        setCatPics(tempArray)
        setCards(tempArray)
      }


    }

    const shuffleCards = () => {
     const shuffled = cards.sort(() => Math.random() - 0.5)
     return shuffled
    }


    const handleScore = (unique) => {
      if (unique === true && score >= best) {
        let newScore = score + 1
        setScore(newScore)
        setBest(newScore)
        setHelper("")

      }
      else if (unique === true && score < best) {
        setScore(score + 1)
        setHelper("")

      }
      else {
        setHelper("You clicked this one already!")
        setScore(0)
        resetGame()
      }
    }

    const resetGame = () => {
      console.log("new game starts...")
      let tempArray = [...cards]
      for (let i=0; i<tempArray.length; i++) {
        tempArray[i].clicked = false
      }
      setCards(tempArray)
    }

    const handleClick = (e) => {
      let tempArray = [...cards]
      for (let i=0; i<tempArray.length; i++) {
        if (tempArray[i].id == e.target.attributes[1].nodeValue) {
          if (tempArray[i].clicked == false) {
            handleScore(true)
            tempArray[i].clicked = true
          }
          else {
            handleScore(false)
          }
        }
      }
      
      setCards(tempArray)
    }

    const unhideCats = () => {

    }


  return (
    <div id="main" className="main">
      <Scoreboard score={score} best={best} helper={helper}></Scoreboard>
      <div className="cards-container">
      {shuffleCards().map((card) => (
        <Card key={card.id} id={card.id} image={card.image} className="card" text={card.cardName} callback={handleClick}/>
      ))
      }
      </div>
    </div>
  )
}

export default Game