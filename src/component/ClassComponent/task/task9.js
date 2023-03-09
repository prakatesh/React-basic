import React, { Component } from 'react'

export default class Task9 extends Component {
    constructor()
    {
        super()
        this.state={
            id:0,
            name:"",
            del:"",
            edit:"",
            inp:"",
            list:[],
            a:"",
            fildtxt:"",
            checkbox:"",
            b:"",
            temp:"",
            editoption:"",
            temp1:"",
            temp2:"",
            temp3:"kl",
            list1:[],
        }
    }
    start=()=>
    {
      this.setState({
        a:true
      })
    }

    start1=()=>
    {
      this.setState({
        id:this.state.id+1,
        list:[{status:false,id:this.state.id,checkbox:<input type='checkbox' value={this.state.id} onClick={this.checkbox1}/>,fildtxt:this.state.name,edit:<button value={this.state.id} onClick={this.edit}>Edit</button>,del:<button value={this.state.id} onClick={this.delete}>Delete</button>},...this.state.list],
        a:""
      })
    }

  end=()=>
  {
    this.setState({
      b:true
    })
  }
  end1=()=>
  {
    this.setState({
      id:this.state.id+1,
      list:[...this.state.list,{status:false,id:this.state.id,checkbox:<input type='checkbox'  value={this.state.id} onClick={this.checkbox1}/>,fildtxt:this.state.name,edit:<button value={this.state.id} onClick={this.edit}>Edit</button>,del:<button value={this.state.id} onClick={this.delete}>Delete</button>}],
      b:""
    })
  }
    change=(e)=>
    {
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    delete=(e)=>
    {
      this.setState({
        temp:this.state.list.map(x=>
          { 
            if(e.target.value===`${x.id}`)
            {
              x.checkbox=""
              x.fildtxt=""
              x.edit=""
              x.del=""
            }
          })
      })
    }
    edit=(e)=>
    {
      this.setState({
        inp:e.target.value,
        editoption:true,
        temp:this.state.list.map(x=>
          { 
            if(e.target.value===`${x.id}`)
            {
              this.state.temp1=x.fildtxt
            }
          })
      })
    }
    editoption=()=>
    {
      this.setState({
        editoption:"",
        temp:this.state.list.map(x=>
          {
            if(this.state.inp===`${x.id}`)
            {
              x.fildtxt=this.state.temp1
            }
          })
      }
      )
    }
    checkbox1=(e)=>
    {
      this.setState({
        temp:this.state.list.map(x=>
          {
            if(e.target.value===`${x.id}`)
            {
              if(x.status===false)
              {
                x.status=true
              }
              else if(x.status===true)
              {
                x.status=false
              }
            }
          })
      })
    }
    complete=()=>
    {
      this.setState({
        temp:this.state.list.map(x=>
          {
            if(x.status===true)
            {
              this.state.list1=[...this.state.list1,{temp3:x.fildtxt}]
            }
          })
      })
    }
    incomplete=()=>
    {
      this.setState({
        temp:this.state.list.map(x=>
          {
            if(x.status===false)
            {
              this.state.list1=[...this.state.list1,{temp3:x.fildtxt}]
            }
          })  
      })
    }
    clear=()=>
    {
      this.setState({
        list1:[]
      })
    }
  render() {
    const textbox=this.state.list.map(x=><p>{x.checkbox}</p>)
    const fildtxt=this.state.list.map(x=><p>{x.fildtxt}</p>)
    const edit=this.state.list.map(x=><p>{x.edit}</p>)
    const del=this.state.list.map(x=><p>{x.del}</p>)
    const l=this.state.list1.map(x=><p>{x.temp3}</p>)
    if(this.state.a===true)
    {
      var a=[<input name='name' onChange={this.change} value={this.state.name} />,<button  onClick={this.start1}>Add</button>]
    }
    if(this.state.b===true)
    {
      var b=[<input name='name' onChange={this.change} value={this.state.name} />,<button onClick={this.end1}>Add</button>]
    }
    if(this.state.editoption===true)
    {
      var c=[<input name='temp1' onChange={this.change} value={this.state.temp1} />,<button onClick={this.editoption}>Add</button>]
    }
    return (
      <>
      <button onClick={this.start}>Add to start</button>
      <button onClick={this.end}>Add to end</button> 
      <button onClick={this.complete}>Complete</button>
      <button onClick={this.incomplete}>Incomplete</button>
      <button onClick={this.clear} >Clear</button>
      <br/>
      <table>
        <th>status</th>
        <th>items</th>
        <th>edit</th>
        <th>Delete</th>
        <tr>
          <td>{textbox}</td>
          <td>{fildtxt}</td>
          <td>{edit}</td>
          <td>{del}</td>
        </tr>
      </table>
        {a}
        {b}
        {c}
        {l}
      </>
    )
  }
}
