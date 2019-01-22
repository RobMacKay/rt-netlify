import React from 'react'
import Cogs from '../img/cogs.svg'
import Pen from '../img/pen.svg'
import Graph from '../img/graph.svg'

export default function Icon(props) {
  
  const {icon, number, text} = props
  let imgsrc = ""

  if(icon === "cogs") {
    imgsrc = Cogs
  } else if(icon === "pen") {
      imgsrc = Pen 
  } else if(icon === "graph") {
      imgsrc = Graph
  }
    
  
  return (
    <div className="content has-text-centered">
      <h2>{number}</h2>
      <img src={imgsrc} alt={icon} style={{height: "60px"}} />
      <p>{text}</p>
    </div>
  )
}
