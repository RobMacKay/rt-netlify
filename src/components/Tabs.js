import React, { Component } from 'react'

export default class Tabs extends Component {
    
    constructor() {
        super(props)

        this.state = {
            tab1: {
                email: "",
                name: "",
                company: "",
            },
            tab2: {
                email: false,
                tel: false,
                countrys: [],
            }
        }

    }

    componentDidMount() {


    }
  
    render() {
    return (
      <div>
        
      </div>
    )
  }
}
