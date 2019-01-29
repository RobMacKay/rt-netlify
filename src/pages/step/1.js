import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

var stepone = {vertical: null, markets: []}

function changeing(e) {

    let item = e.target;

    console.log(item.value)

    if(item.name === "vertical")
        stepone.vertical = item.value
    
    if(item.name === "markets")
        stepone.markets.push(item.value)

    stepone.markets.unique()
    
        console.log(stepone)

}

export default function StepOne(props) {

    const user = props.location.state.user

    console.log("step1:", props.location.state)

    return (
    <Layout>
    <section className="section has-text-centered">
        <div className="container">
            <div className="columns has-text-white">
                <div className="column is-half">
                    <h3>Select your Vertical</h3>
                    <select name="vertical" onChange={(e) => changeing(e)}>
                        <option value="sports">Sports</option>
                        <option value="casions">Casinos</option>
                    </select>
                </div>
                <div className="column is-half">
                    <h3>Select your Markets</h3>
                    <select multiple name="markets" onChange={(e) => changeing(e)}>
                        <option value="uk">UK</option>
                        <option value="es">Spain</option>
                        <option value="no">Norway</option>
                    </select>                   
                </div>
            </div>
            <div className="container">
                    <Link to="/" state={{user: user, stepone: stepone}} className="nav-but">Previous</Link>
                    <Link to="/step/2/" state={{user: user, stepone: stepone}} className="nav-but">Next</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
