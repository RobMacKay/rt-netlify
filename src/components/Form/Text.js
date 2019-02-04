import React from 'react'

const styles = {
  box: {
    border: "3px solid #FFF",
    padding: "1rem 2rem",
    background: "transparent",
    color: "#FFF",
    margin: "20px 0",
    display: "block",
    width: "100%",
    fontSize: "1rem"
  }
}

export default function Text(props) {

  const { name, placeholder, email, change } = props
  const setmail = (email) ? "email" : "text"

  return <input type={setmail} name={name} placeholder={placeholder} onChange={change} style={styles.box} />
}
