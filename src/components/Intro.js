import React from 'react'
import Icon from './Icon'
import Form from './Form'

export default function Intro() {
  return (
    <div className="content intro">
      <div className="columns is-mobile is-8">
        <div className="column"><Icon text="Choose your industry and the markets you would like to cover" icon="pen" number="1"/></div>
        <div className="column"><Icon text="Provide the number of inactive players you would like to reactivate" icon="cogs" number="2"/></div>
        <div className="column"><Icon text="Find out what results you can expect" icon="graph" number="3"/></div>
      </div>
      <Form />
    </div>
  )
}
