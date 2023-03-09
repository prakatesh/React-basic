import React, { Component } from 'react'

export default class Fomhandling extends Component {
    constructor()
    {
        super()
        this.state={
            name:"",
            command:'',
            jobs:''
        }
    }
    chna=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    chcom=(event)=>{
        this.setState({
            command:event.target.value
        })
    }
    chjob=(event)=>{
        this.setState({
            jobs:event.target.value
        })
    }
    sub=(event)=>
    {
        alert(event)
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <from>
        <input type='text' value={this.state.name} onChange={this.chna}></input>
        <textarea type='tex' value={this.state.command} onChange={this.chcom}/>
        <select value={this.state.jobs} onChange={this.chjob}>
        <option value='React'>React</option>
        <option value='express'>express</option>
        <option value='MangoDB'>MangoDB</option>
        </select>
        <button type='submit' onClick={this.sub}>submit</button>
      </from>
      </div>
    )
  }
}
