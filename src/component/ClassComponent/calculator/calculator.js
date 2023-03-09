import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor()
    {
        super()
        this.state={
            inputtext:""
        }
    }
    // inputbox=(vent)=>
    // {
    //     this.setState({
    //         inputtext:(this.state.inputtext)+vent.target.value
    //     })
    // }
    button=(val)=>{
        this.setState({
            inputtext:this.state.inputtext+val.target.value
        })
    }
    submitbutton=()=>
    {

        console.log(this.state.inputtext)
        this.setState({
            inputtext:eval(this.state.inputtext)
        })
    }

    // submitbutton=()=>
    // {
    //     var len=this.state.inputtext.length
    //     const vall=this.state.inputtext
    //     const sum=0
    //     const digit=''
    //     const b=''
    //     for(var i=0;i<len;i++)
    //     {
    //         console.log(vall[i])
    //         if(vall[i]>='1'&&vall[i]<='9')
    //         {
    //             digit.append(vall[i])
    //         }
    //         else{
    //             if(vall[i]=='+')
    //             {
    //                 b+=vall[i]
    //                 console.log(digit)
    //                 console.log(b)
    //                 break
    //             }
    //         }
    //     }
    // }

  render() {
    return (
      <>
        <input type='text'  value={this.state.inputtext} onChange={this.inputbox}/>
        <br/>
        <button value='9' onClick={this.button} >9</button>
        <button value='8' onClick={this.button} >8</button>
        <button value='7' onClick={this.button} >7</button>
        <button value='+' onClick={this.button} >+</button>
        <br/>
        <button value='4' onClick={this.button} >4</button>
        <button value='5' onClick={this.button} >5</button>
        <button value='6' onClick={this.button} >6</button>
        <button value='-' onClick={this.button} >-</button>
        <br/>
        <button value='1' onClick={this.button} >1</button>
        <button value='2' onClick={this.button} >2</button>
        <button value='3' onClick={this.button} >3</button>
        <button value='*' onClick={this.button} >*</button><br/>
        <button onClick={this.submitbutton}>ANS</button>
      </>
    )
  }
}
