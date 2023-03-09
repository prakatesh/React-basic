import React, { Component } from 'react'

export default class Searchkey extends Component {
    constructor()
    {
        super()
        this.state={
            name:"",
            age:"",
            roll:"",
            mark:"",
            add:"",
            search:"",
            searchvalue:"",
            update:"",
            updatevalue:"",
            updateno:"",
            change:true,
            temp:"",
            update1:"",
            del:"",
            list:[]
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
        console.log(this.state)
        this.setState({
            list:[...this.state.list,{name:this.state.name,age:this.state.age,roll:this.state.roll,mark:this.state.mark,add:this.state.add}]
        })
        e.preventDefault()
    }
    check=()=>
    {
        this.setState({
            searchvalue:this.state.list.map(x=>{
                if(x.roll===this.state.search)
                {
                    this.state.searchvalue=true
                    return(
                    <>
                        <h4>Name:{x.name}<br/>
                        Age:{x.age}<br/>
                        Rollno:{x.roll}<br/>
                        Mark:{x.mark}<br/>
                        </h4>
                    </>
                    )
                }
            })
        })
        
    }
    updatecheck=()=>
    {
        this.setState({
            updatevalue:this.state.list.map((x)=>{
                if(x.roll===this.state.update)
                {
                    return true
                }
                else{
                    return false
                }
            })
        })
    }
    updatefind=()=>
    {
            this.setState({
                change:this.state.list.map(x=>
                    {
                        if(x.roll===this.state.update)
                        {
                            this.state.temp=true
                        }
                    })
            })
    }
    last=()=>
    {
        if(this.state.updateno===`1`)
        {
            this.setState({
                change:this.state.list.map(x=>
                    {
                        if(x.roll===this.state.update)
                        {
                            x.name=this.state.update1
                        }
                    })
            })
        }
        if(this.state.updateno===`2`)
        {
            this.setState({
                change:this.state.list.map(x=>
                    {
                        if(x.roll===this.state.update)
                        {
                            x.age=this.state.update1
                        }
                    })
            })
        }
        if(this.state.updateno===`3`)
        {
            this.setState({
                change:this.state.list.map(x=>
                    {
                        if(x.roll===this.state.update)
                        {
                            x.mark=this.state.update1
                        }
                    })
            })
        }
        if(this.state.updateno===`4`)
        {
            this.setState({
                change:this.state.list.map(x=>
                    {
                        if(x.roll===this.state.update)
                        {
                            x.add=this.state.update1
                        }
                    })
            })
        }
    }
    delfun=()=>
    {
        this.setState({
            change:this.state.list.map(x=>
                {
                    if(x.roll===this.state.del)
                    {
                        x.roll=""
                        x.name=""
                        x.age=""
                        x.mark=""
                        x.add=""
                    }
                })
        })
    }
  render() {
    var a=[]
    const name=this.state.list.map((x,index)=><p key={index}>{x.name}</p>)
    const age=this.state.list.map((x,index)=><p key={index}>{x.age}</p>)
    const roll=this.state.list.map((x,index)=><p key={index}>{x.roll}</p>)
    const mark=this.state.list.map((x,index)=><p key={index}>{x.mark}</p>)
    const add=this.state.list.map((x,index)=><p key={index}>{x.add}</p>)
    if(this.state.updatevalue)
    {
            a=[
            <h4>1.name</h4>,
            <h4>2.Age</h4>,
            <h4>3.mark</h4>,
            <h4>4.Address</h4>,
            <input name='updateno' onChange={this.change} value={this.state.updateno} />,
            <button onClick={this.updatefind}>update</button>
        ]        
    }
    else if(this.state.updatevalue===false)
    {
        a=[<h4>Error no found</h4>]
    }
    if(this.state.searchvalue==="")
    {
        var b=[
            <h3>not found</h3>
        ]
    }
    if(this.state.temp===true)
    {
        var c=[
            <br/>,
            <input name='update1' value={this.state.update1} onChange={this.change}/>,
            <button onClick={this.last}>Done</button>
        ]
    }
    return (
      <>
      <form onSubmit={this.submit}>
        <label>Name:</label>
        <input name='name' value={this.state.name} onChange={this.change}/><br></br>
        <label>Age:</label>
        <input name='age' value={this.state.age} onChange={this.change}/><br></br>
        <label>Rollno:</label>
        <input name='roll' value={this.state.roll} onChange={this.change}/><br></br>
        <label>Mark:</label>
        <input name='mark' value={this.state.mark} onChange={this.change}/><br></br>
        <label>Address</label>
        <textarea name='add' value={this.state.add} onChange={this.change}></textarea><br/>
        <button type='submit'>submit</button>
      </form>
        <table>
            <th>Name</th>
            <th>Age</th>
            <th>Rollno</th>
            <th>Mark</th>
            <th>Address</th>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{roll}</td>
                <td>{mark}</td>
                <td>{add}</td>
            </tr>
        </table>
        <h1>Search</h1>
        <label>Only Rollno</label>
        <input name='search' onChange={this.change}  value={this.state.search}/><button onClick={this.check}>check</button>
       {this.state.searchvalue}
       {b}
        <h1>Update</h1>
        <input name='update' value={this.state.update} onChange={this.change} /><button onClick={this.updatecheck}>check</button>
        {a}
        {c}
        <h1>Delete</h1>
        <input name='del' value={this.state.del} onChange={this.change}/><button onClick={this.delfun}>Done</button>
      </>
    )
  }
}
