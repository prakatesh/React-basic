import React, { Component } from 'react'

export default class Threedot extends Component {
    constructor(){
        super()
        this.state={
            ind:0,
            list:[0]
        }
    }
    changebutton=()=>
    {
        this.state.ind+=1
        this.setState({
            list:[...this.state.list,this.state.ind]
        })
    }
  render() {
    const b=this.state.list.map(x=><div>{x}</div>)
    return (
      <>
      <button onClick={this.changebutton}>click</button>
      {b}
      </>
    )
  }
}
