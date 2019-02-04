import React from 'react'

export default function Slider(props) {
  
  const {min, max, name, change} = props

  const styles = {
    container: {
        height: "auto",
        overflow: "hidden"
    },
    range: {
        WebkitAppearance: "none",
        width: "100%",
        height: "15px",
        borderRadius: "5px",  
        background: "#FFF",
        outline: "none",
        opacity: "0.7",
        WebkitTransition: ".2s",
        transition: "opacity .2s"
    }


  }

  return (
    <div style={styles.container}>
      <input type="range" min={min} max={max} id={"range-"+name} name={name} style={styles.range} className="range-slider" onChange={change} /> 
    </div>
  )
}
