import React, { useState } from "react";


const Card = ({text, callback, id, image}) => {

  

  return (
    <img className="card wave" id={id} onClick={callback} src={image}></img>
  )
}

export default Card