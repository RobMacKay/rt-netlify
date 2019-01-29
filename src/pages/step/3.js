import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

var stepthree = {varification: [], wagering: null}

function changeing(e) {

    let item = e.target

    if(item.name === "varification")
        stepthree.varification.push(item.value).unique()
    
    if(item.name === "wagering")
        stepthree.wagering = item.value

    console.log(stepthree)

}

export default function StepOne(props) {

    const user = props.location.state.user
    const stepone = props.location.state.stepone
    const steptwo = props.location.state.steptwo

console.log("step3:", props.location.state)

  return (
    <Layout>
    <section className="section has-text-centered">
        <div className="container">
            <div className="columns has-text-white">
                <div className="column is-half ">
                    <h3>Choose your current verification method</h3>
                    <select multiple name="varification" onChange={(e) => changeing(e)}>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <div className="column is-half">
                    <h3>Your Average Wagering Requirements on Bonuses?</h3>
                    <select name="wagering" onChange={(e) => changeing(e)}>
                        <option value="35lt">35LT</option>
                        <option value="35gt">35GT</option>
                    </select>

                </div>
            </div>
            <div className="container">
                    <Link to="/results/" state={{user:user, stepone:stepone, steptwo:steptwo, stepthree:stepthree}} className="nav-but">View Results</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
