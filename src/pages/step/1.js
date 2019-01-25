import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

export default function StepOne() {
  return (
    <Layout>
    <section className="section has-text-centered">
        <div className="container">
            <div className="columns has-text-white">
                <div className="column is-half">
                    <h3>Select your Vertical</h3>
                </div>
                <div className="column is-half">
                    <h3>Select your Markets</h3>                    
                </div>
            </div>
            <div className="container">
                    <Link to="/" className="nav-but">Previous</Link>
                    <Link to="/step/2/" className="nav-but">Next</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
