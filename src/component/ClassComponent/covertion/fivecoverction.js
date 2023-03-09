import React, { Component } from 'react'

export default class Fivecoverction extends Component {
    constructor()
    {
        super()
        this.state={
            ind:"",
            usd:"",
            uk:"",
            eruo:"",
            china:""
        }
    }
    chind=(event)=>{
        this.setState({
            ind:event.target.value,
            usd:event.target.value*0.012,
            uk:event.target.value*0.010,
            eruo:event.target.value*0.011,
            china:event.target.value*0.083
        })
    }
    chusd=(event)=>{
        this.setState({
            usd:event.target.value,
            ind:event.target.value*82.73,
            uk:event.target.value*0.83,
            eruo:event.target.value*0.94,
            china:event.target.value*6.83
        })
    }
    chuk=(event)=>{
        this.setState({
            uk:event.target.value,
            ind:event.target.value*99.74,
            usd:event.target.value*1.21,
            eruo:event.target.value*1.14,
            china:event.target.value*8.31
        })
    }
    cheruo=(event)=>{
        this.setState({
            eruo:event.target.value,
            ind:event.target.value*87.80,
            usd:event.target.value*1.06,
            uk:event.target.value*0.88,
            china:event.target.value*7.31
        })
    }
    chchina=(event)=>{
        this.setState({
            china:event.target.value,
            ind:event.target.value*12,
            usd:event.target.value*0.15,
            uk:event.target.value*0.12,
            eruo:event.target.value*0.14,
        })
    }
  render() {
    return (
        <>
        <label>IND</label>
        <input type='text' value={this.state.ind} onChange={this.chind}/>
        <label>usd</label>
        <input type='text' value={this.state.usd} onChange={this.chusd}/>
        <label>uk</label>
        <input type='text' value={this.state.uk} onChange={this.chuk}/>
        <label>euro</label>
        <input type='text' value={this.state.eruo} onChange={this.cheruo}/>
        <label>china</label>
        <input type='text' value={this.state.china} onChange={this.chchina}/>
        </>
    )
  }
}
