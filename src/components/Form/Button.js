import React from 'react'

const styles = {
  border: "none",
  width: "100%"
}

export default function Button(props) {

  const {name, type, to, value, handleClick} = props

  return (
    <button style={styles} name={name} type={type} data-to={to} className="nav-but" onClick={handleClick}>{value}</button>
  )
}
