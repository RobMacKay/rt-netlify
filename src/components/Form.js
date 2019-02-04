import React, { Component } from 'react'
import { navigate } from 'gatsby'
import Text from './Form/Text'
import Select from './Form/Select'
import Slider from './Form/Slider'
import Button from "./Form/Button"
export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: null,
                email: null, 
                company: null,
                users: null
            }
        }

    }

    componentDidMount() {

        console.log("I mounted this time you dirty bastard")
        //console.log("Props:", this.props.location.state.state)

        let state = false
        let { location } = this.props

        if(typeof location !== "undefined") {
            state = (typeof location.state.state !== undefined) ? location.state.state : false

            if(state !== false) {
                
                let { user } = state

                this.setState({user}, 
                    () => console.log("I mounted and set:", this.state))

            } else { 
                console.log("Seriously fuck you")
            }
        }

    }

    handleClick = (e) => {
        e.preventDefault()

        let item = e.target

        console.log(item.dataset.to)

        let state = this.state

        navigate(item.dataset.to, { state: { state }})
    }

    handleChange = (e) => {

        let user = this.state.user
        let item = e.target
        let {name, value} = item

        user[name] = value
        console.log("On Click:", user[name] + " = " + value)     

        this.setState({user}, 
        () => console.log("I set:", this.state))

    }

  render() {
    return (
      <form method="POST" >
        {typeof window !== undefined && window.location.pathname === "/" && (
            <React.Fragment>
                <Text name="name" placeholder="Name" change={this.handleChange} />
                <Text name="company" placeholder="Company" change={this.handleChange} />
                <Text name="email" placeholder="Email Address" email={true} change={this.handleChange} />
                <Button name="start" type="link" to="/step/1/" value="Start Test" handleClick={this.handleClick} />
            </React.Fragment>
            )
        }
        {typeof window !== undefined && window.location.pathname === "/step/1/" && (
            <React.Fragment>
                <Select name="vertical" options={[{value:'casinos', name:'Casinos'}, {value:'sports', name:'Sports'}]} change={this.handleChange}/>
                <Select name="markets" options={[{value:'no', name:'Norway'}, {value:'es', name:'Spain'}, {value:'fr', name:'France'}]} change={this.handleChange}/>
                <Button name="prev" type="link" to="/" value="Previous" handleClick={this.handleClick} />
                <Button name="next" type="link" to="/step/2/" value="Next" handleClick={this.handleClick} />
            </React.Fragment>
        )
        }
        {typeof window !== undefined && window.location.pathname === "/step/2/" && (
            <React.Fragment>
                <Slider min="1" max="36" name="interval" change={this.handleChange} />
                <Slider min="0" max="100000" name="inactive" change={this.handleChange} />
                <Select name="varification" options={[{value:'phone', name:'Phone'}, {value:'mail', name:'Mail'}]} change={this.handleChange}/>
                <Button name="prev" type="link" to="/step/1/" value="Previous" handleClick={this.handleClick} />
                <Button name="next" type="link" to="/step/3/" value="Next" handleClick={this.handleClick} />
            </React.Fragment>
        )
        }
        {typeof window !== undefined && window.location.pathname === "/step/3/" && (
            <React.Fragment>
                <Select name="wagering" options={[{value:'gt', name:'GT35'}, {value:'lt', name:'LT35'}]} change={this.handleChange}/>
                <Button name="next" type="link" to="/results/" value="View Results" handleClick={this.handleClick} />
            </React.Fragment>
        )
        }
      </form>
    )
  }
}
