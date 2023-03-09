import React, { Component } from 'react'

export default class Task extends Component {
  constructor()
  {
    super()
    this.state={
      ind:0,
      id:-1,
      inp:"",
      data:new Date().toLocaleTimeString(),
      list:[]
    }
  }
  start=()=>
  {
    this.state.ind+=1
    this.state.id+=1
    const data=new Date()
    this.setState({
      data:data.toLocaleTimeString(),
      list:[...this.state.list,{ind:this.state.ind,id:this.state.id,inp:<input/>,data:this.state.data}]
    })
  }
  end=()=>
  {
    this.state.ind+=1
    this.state.id+=1
    const data=new Date()
    this.setState({
      data:data.toLocaleTimeString(),
      list:[{ind:this.state.ind,id:this.state.id,inp:<input/>,data:this.state.data},...this.state.list]
    })
  }

  render() {
    const index=this.state.list.map((x,index)=><p key={index}>{x.ind}</p>)
    const id=this.state.list.map((x,index)=><p key={index}>{x.id}</p>)
    const inp=this.state.list.map((x,index)=><p key={index}>{x.inp}</p>)
    const data=this.state.list.map((x,index)=><p key={index}>{x.data}</p>)
    return (
      <>
      <button onClick={this.end}>add to start</button>
      <button onClick={this.start}>add to end</button>
      <table>
        <th>index</th>
        <th>id</th>
        <th>items</th>
        <th>date</th>
        <tr>
        <td>{index}</td>
        <td>{id}</td>
        <td>{inp}</td>
        <td>{data}</td>
        </tr>
      </table>
      </>
    )
  }
}
