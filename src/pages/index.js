import React from 'react'
import Layout from '../components/Layout'
import Intro from '../components/Intro'

export default class IndexPage extends React.Component {
  render() {
    
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <Intro />
          </div>
        </section>
      </Layout>
    )
  }
}
