import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

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
                    <select multiple name="varification">
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <div className="column is-half">
                    <h3>Your Average Wagering Requirements on Bonuses?</h3>
                    <select name="wagering">
                        <option value="35lt">35LT</option>
                        <option value="35gt">35GT</option>
                    </select>

                </div>
            </div>
            <div className="container">
                    <Link to="/results/" state={{user:user, stepone:stepone, steptwo:steptwo, stepthree: {varification: ['phone', 'email'], average: "35lt"}}} className="nav-but">View Results</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
