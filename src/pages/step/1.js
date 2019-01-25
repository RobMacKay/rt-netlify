import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

export default function StepOne() {
  return (
    <Layout>
    <section className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-half">
                    <h3>Select your Vertical</h3>
                </div>
                <div className="column is-half">
                    <h3>Select your Markets</h3>                    
                </div>
            </div>
            <div className="container">
                    <Link to="/">Previous</Link>
                    <Link to="/step/2/">Next</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
