import React, { Component } from 'react'

export default class Propsstate extends Component {
  render() {
    return (
      <div>
        <h1>hello with class props by {this.props.name}</h1>
        <h1>{this.props.children}</h1>
        
      </div>
    )
  }
}
