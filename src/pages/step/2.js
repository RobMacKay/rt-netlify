import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

export default function StepOne() {
  return (
    <Layout>
    <section className="section has-text-centered">
        <div className="container">
            <div className="columns">
                <div className="column is-half has-text-white">
                    <h3>Select the Time Interval of Dormant Players</h3>
                </div>
                <div className="column is-half">
                    <h3>How Large Is Your Inactive Database?</h3>                    
                </div>
            </div>
            <div className="container">
                    <Link to="/step/1/" className="nav-but">Previous</Link>
                    <Link to="/step/3/" className="nav-but">Next</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
