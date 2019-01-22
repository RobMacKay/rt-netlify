import React from 'react'
import logo from '../img/logo.svg'

export default function Top() {
  return (
    <div className="hero headarea">
        <div className="hero-body">
            <div className="container has-text-centered is-size-4-mobile">
            <img src={logo} alt="Reactivation Group" style={{  width: "40vh", marginBottom: "5vh" }}/>
            <h2 className="title is-2 is-size-3-mobile">Reactivation Group Increases Your Active Database</h2>
            <p>Explore the conversion rates we can offer for the markets you operate in</p>
            <p>Discover the savings in activating your inactive database</p>
            <p>compared to new acquisitions costs</p>
            </div>
        </div>
    </div>
  )
}

