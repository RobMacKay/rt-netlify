import React from 'react'
import { Link } from 'gatsby'
import Layout from "../../components/Layout"

export default function StepOne() {
  return (
    <Layout>
    <section className="section has-text-centered">
        <div className="container">
            <div className="columns has-text-white">
                <div className="column is-half ">
                    <h3>Choose your current verification method</h3>
                </div>
                <div className="column is-half">
                    <h3>Your Average Wagering Requirements on Bonuses?</h3>                    
                </div>
            </div>
            <div className="container">
                    <Link to="/results/" className="nav-but">View Results</Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}
