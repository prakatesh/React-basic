import React, { Component } from 'react'

export default class Inrtousd extends Component {
    constructor()
    {
        super()
        this.state={
            inr:1,
            usd:0.012
        }
    }
    chinr=(event)=>
    {
        this.setState({
            inr:event.target.value,
            usd:event.target.value*0.012
        })
    }
    chusd=(event)=>
    {
        this.setState({
            usd:event.target.value,
            inr:event.target.value*82.83
        })
    }
  render()
   {
    return (
     <>
        <form>
            <label>IND</label>
            <input value={this.state.inr} onChange={this.chinr}></input>
            <label>USD</label>
            <input value={this.state.usd} onChange={this.chusd}></input>
        </form>
     </>
    )
  }
}
