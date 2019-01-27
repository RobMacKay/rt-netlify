import React from 'react'
//import Icon from './Icon'
import Form from './Form'
import network from "../img/steps/network.svg"
import heads from "../img/steps/heads.svg"
import graph from "../img/steps/graph.svg"

export default function Intro() {
  return (
    <section className="section intro">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <ul>
            <li className="is-size-2 is-flex"><div className="text">Choose your vertical and the markets you would like to cover</div><div className="icon"> <img src={network} alt="Markets" /></div></li>
            <li className="is-size-2 is-flex"><div className="text">Provide the number of inactive players you would like to reactivate</div><div className="icon"> <img src={heads} alt="Players" /></div></li>
            <li className="is-size-2 is-flex"><div className="text">Explore the Reactivation rates we can provide</div><div className="icon"> <img src={graph} alt="Rates" /></div></li>
          </ul>
        </div>
        <div className="column is-half">
        <h1 className="is-uppercase is-size-1">we know how to communicate with your players</h1>
        <Form />
        </div>
      </div>
    </div>
    </section>
  )
}
