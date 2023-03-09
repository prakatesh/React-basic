import axios from 'axios'
import React, { Component } from 'react'

export default class Axios extends Component {
    constructor()
    {
        super()
        this.state={
            name:"",
            title:"",
            body:""
        }
    }
    change=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit=(e)=>
    {
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(res=>{
            console.log(res.data)
        })
        .catch(Error=>
            {
                console.log(Error)
            })
        e.preventDefault()
    }
  render() {
    return (
      <>
      <form onSubmit={this.submit}>
        <input name='name' onChange={this.change} value={this.state.name}/><br/>
        <input name='title' onChange={this.change} value={this.state.title}/><br/>
        <input name='body' onChange={this.change} value={this.state.body}/><br/>
        <button type='submit' >Submit</button>
      </form>
      </>
    )
  }
}
