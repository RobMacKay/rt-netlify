import React from 'react'
import logo from '../img/logo.svg'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <section class="section">
        <div className="columns">
            <div className="column is-one-fifth">
            <Link to="/">
            <img src={logo} alt="Reactiviation Group" style={{maxHeight: 200, minHeight: 200}} />
            </Link>
            </div>
            <div className="column"></div>
        </div>
    </section>
  )
}
