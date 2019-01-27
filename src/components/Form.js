import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Form extends Component {
  render() {
    return (
      <form>
        <div className="field">
            <div className="control">
                <input className="input" type="email" placeholder="Email Address" />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input" type="text" placeholder="Name" />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input" type="text" placeholder="Company Name" />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <Link to="/step/1/" state={{user: {name: "Rob MacKay", company:"RSC Media LTD", email:"robskiwarrior@gmail.com"}}} className="nav-but">Start Test</Link>
            </div>
        </div>
      </form>
    )
  }
}
