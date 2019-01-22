import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">From</label>
            </div>
        <div className="field-body">
            <div className="field">
            <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
            </p>
            </div>
            <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                </span>
            </p>
            </div>
        </div>
        </div>

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Company</label>
            </div>
        <div className="field-body">
            <div className="field">
            <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
            </p>
            </div>
        </div>
        </div>

        <div className="field is-horizontal">
        <div className="field-label">
            
        </div>
        <div className="field-body">
            <div className="field">
            <div className="control">
                <button className="button is-primary">
                Begin Test
                </button>
            </div>
            </div>
            <div className="field">
            <div className="control">
                <button className="button is-secondary">
                Cancel Test
                </button>
            </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
