import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Form extends Component {

    constructor() {
        super()

        this.state = {
            user: {
                name: null,
                email: null, 
                company: null
            }
        }
    }

    changeing(e) {

        let item = e.target
    
        console.log(item.value)

        const { user } =  this.state
 
        if(item.name === "email")
            user.email = item.value

        if(item.name === "name")
            user.name = item.value

        if(item.name === "company")
            user.company = item.value

        this.setState({user,})
    
    }

  render() {
    return (
      <form>
        <div className="field">
            <div className="control">
                <input className="input" name="email" type="email" placeholder="Email Address" onChange={(e) => this.changeing(e)} />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input" name="name" type="text" placeholder="Name" onChange={(e) => this.changeing(e)} />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input" name="company" type="text" placeholder="Company Name" onChange={(e) => this.changeing(e)} />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <Link to="/step/1/" state={{user: this.state.user}} className="nav-but">Start Test</Link>
            </div>
        </div>
      </form>
    )
  }
}
