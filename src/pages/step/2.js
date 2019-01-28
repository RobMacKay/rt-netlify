import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

var steptwo = {interval: null, size: null}

function changeing(e) {

    let item = e.target

    if(item.name === "interval")
        steptwo.interval = item.value
    
    if(item.name === "size")
        steptwo.size = item.value

    console.log(steptwo)

}

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
                    <input type="text" name="interval" onChange={(e) => changeing(e)}/>
                </div>
                <div className="column is-half">
                    <h3>How Large Is Your Inactive Database?</h3>
                    <input type="text" name="size" onChange={(e) => changeing(e)}/>              
                </div>
            </div>
            <div className="container">
                    <Link to="/step/1/" state={{user:user, stepone:stepone}} className="nav-but">Previous</Link>
                    <Link to="/step/3/" state={{user:user, stepone:stepone, steptwo:steptwo}} className="nav-but">Next</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
