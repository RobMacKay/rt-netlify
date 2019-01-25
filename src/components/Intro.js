import React from 'react'
//import Icon from './Icon'
import Form from './Form'

export default function Intro() {
  return (
    <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <ul>
            <li>Choose your vertical and the markets you would like to cover</li>
            <li>Provide the number of inactive players you would like to reactivate</li>
            <li>Explore the Reactivation rates we can provide</li>
          </ul>
        </div>
        <div className="column is-half"><Form /></div>
      </div>
    </div>
    </section>
  )
}
