import React from 'react'
import Layout from "../../components/Layout"
import Form from "../../components/Form"

export default function StepOne(props) {
    
  return (
    <Layout>
      <section className="section has-text-centered">
          <div className="container">
            <Form location={props.location}/>
          </div>
      </section>
    </Layout>
  )
}
