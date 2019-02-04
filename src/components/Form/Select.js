import React from 'react'

export default function Select(props) {

  const { name, options, change, multiple } = props

  const opts = options.map((item,i)=>{

      return (<option key={i} value={item.value}>{item.name}</option>)

  })

  return (
    <select multiple={multiple} name={name} onChange={change}>
        {opts}
    </select>
  )
}
