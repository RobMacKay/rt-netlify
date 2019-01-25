import React from 'react'
import Test from '../../components/Test'
import Layout from '../../components/Layout'

export default function TestArea() {
  return (
    <Layout>
      <div className="container">
      <div className="content intro">
        <div className="columns is-6">
          <Test />
        </div>
      </div>
      </div>
    </Layout>
  )
}
