import React, { Component } from 'react'

export default class Choosecountryforconvertion extends Component {
    constructor()
    {
        super()
        this.state={
            text1:"",
            text2:"",
            job1:"ind",
            job2:"ind"
        }
    }
    onChange1=(value1)=>
    { 
        this.setState({
            job1:value1.target.value
        })
    }
    onChange2=(value1)=>
    { 
        this.setState({
            job2:value1.target.value
        })
    }
    chtxt1=(event)=>
    {
        if(this.state.job1==="ind"&& this.state.job2==="ind")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value
            })
        }
        else if(this.state.job1==="ind"&& this.state.job2==="us")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value*0.012
            })
        }
        else if(this.state.job1==="ind"&& this.state.job2==="uk")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value*0.010
            })
        }
        else if(this.state.job1==="us"&& this.state.job2==="ind")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value*0.012
            })
        }
        else if(this.state.job1==="us"&& this.state.job2==="uk")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value*0.83
            })
        }
        else if(this.state.job1==="us"&& this.state.job2==="us")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value
            })
        }
        else if(this.state.job1==="uk"&& this.state.job2==="ind")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value*99.54
            })
        }
        else if(this.state.job1==="uk"&& this.state.job2==="us")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value*1.20
            })
        }
        else if(this.state.job1==="uk"&& this.state.job2==="uk")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value
            })
        }
    }
    chtxt2=(event)=>
    {
        if(this.state.job1==="ind"&& this.state.job2==="ind")
        {
            this.setState({
                text1:event.target.value,
                text2:event.target.value
            })
        }
        else if(this.state.job1==="ind"&& this.state.job2==="us")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value*0.012
            })
        }
        else if(this.state.job1==="ind"&& this.state.job2==="uk")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value*0.010
            })
        }
        else if(this.state.job1==="us"&& this.state.job2==="ind")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value*0.012
            })
        }
        else if(this.state.job1==="us"&& this.state.job2==="uk")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value*0.83
            })
        }
        else if(this.state.job1==="us"&& this.state.job2==="us")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value
            })
        }
        else if(this.state.job1==="uk"&& this.state.job2==="ind")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value*99.54
            })
        }
        else if(this.state.job1==="uk"&& this.state.job2==="us")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value*1.20
            })
        }
        else if(this.state.job1==="uk"&& this.state.job2==="uk")
        {
            this.setState({
                text2:event.target.value,
                text1:event.target.value
            })
        }
    }
  render() {
    return (
      <div>
        <select value={this.state.job1} onChange={this.onChange1}>
            <option value="ind">ind</option>
            <option value="us">US</option>
            <option value="uk">Uk</option>
        </select>
        <input type='text' value={this.state.text1} onChange={this.chtxt1}/>
        <br/>
        <select value={this.state.job2} onChange={this.onChange2}>
            <option value="ind">ind</option>
            <option value="us">US</option>
            <option value="uk">Uk</option>
        </select>
        <input type='text' value={this.state.text2} onChange={this.chtxt2}/>
      </div>
    )
  }
}
