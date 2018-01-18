import React, {Component} from 'react'
import 'style!css!sass!app/styles/rafstyles.scss'

export default class BulmaExperiment extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <hx>This is bulma-experiment!</hx>
        <button className="button">Foobar</button>
      </div>
    )
  }
}