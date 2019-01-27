import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

export default function StepOne(props) {

  const user = props.location.state.user
  const stepone = props.location.state.stepone

  console.log("step2:", props.location.state)
    
  return (
    <Layout>
    <section className="section has-text-centered">
        <div className="container">
            <div className="columns">
                <div className="column is-half has-text-white">
                    <h3>Select the Time Interval of Dormant Players</h3>
                    <input type="text" name="interval" value=""/>
                </div>
                <div className="column is-half">
                    <h3>How Large Is Your Inactive Database?</h3>
                    <input type="text" name="size" value=""/>              
                </div>
            </div>
            <div className="container">
                    <Link to="/step/1/" state={{user:user, stepone:stepone}} className="nav-but">Previous</Link>
                    <Link to="/step/3/" state={{user:user, stepone:stepone, steptwo:{interval: 30, size: 3000}}} className="nav-but">Next</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
