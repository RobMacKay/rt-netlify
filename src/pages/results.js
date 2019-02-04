import React from 'react'
import Layout from "../components/Layout"

export default function Results(props) {

  //const { user } = props.location.state.state
  
  return (
    <Layout>
    <section className="section has-text-centered">
          <div className="container">
            <h2> Amount of reactivated players <br />
            <b>78732147</b></h2>
            <h3>The data from the entries</h3>
            <ul>
              
            </ul>
          </div>
    </section>
    <section className="section has-text-centered">
          <div className="columns is-marginless" style={{backgroundColor: "#FFF"}} >
            <div className="column is-half inverse">
              <p>€3,150,000</p>
              <p>9000 New NDC</p>
              <p>with Affiliate costs</p>
            </div>
            <div className="column is-half inverse">
              <p>€450,000</p>
              <p>9000 Reactivated Players</p>
              <p>with Reactivation Group</p>
            </div>
          </div>
    </section>
    <section className="section has-text-centered">
          <div className="columns is-marginless" >
            <div className="column is-4">
              <p>€80</p>
              <p>Average Amount on Players Next Deposit</p>
            </div>
            <div className="column is-4">
              <p>39%</p>
              <p>Reactivation on Players Spoken To</p>
            </div>
            <div className="column is-4">
              <p>80 Days</p>
              <p>Time to Reach Return on Investment</p>
            </div>
          </div>
    </section>
    <section className="section has-text-centered">
          <div className="container">
          <p>We work with inactive players from 30 days up to 3 years old. We suggest picking out players that made at least 2 deposits or more than 50 Euro in total deposits.</p>
          
          <h2>PRICE SUGGESTION:</h2>
          <p>Organic Traffic: Hybrid - CPA €25 + 25% Revshare Affiliate Traffic: CPA €50</p>
          
          <h2>SUGGESTED OFFER TO REACH RESULTS:</h2>
          <p>20 Free Spins on login + 100% deposit bonus up to €200</p>
          
          <p>If you have any other quantities, verticals or additional markets get in touch with Reactivation Group. We strive to always be as flexible as possible to meet your needs.</p>
          
          <p>Your results have been sent to your email. If you have any other questions, please contact us at</p>

          <p><b>harpo.lilja@reactivationgroup.com</b></p>

          <p><b>+34 659 646 536</b></p>
          </div>
    </section>
    </Layout>
  )
}
