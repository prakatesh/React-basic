import React from "react";
class Currency extends React.Component{
    constructor(){
        super()
        this.state={
            a:prompt("Enter the amount"),
            us:0,
            euro:0,
            ind:0
        }
    }
    convert()
    {
        this.setState({
            a:parseInt(this.state.a),
            us:this.state.a*0.012,
            euro:this.state.a*0.011
        })
       console.log(this.state.a) 
    }
    render()
    {
        return(
            <>
            <h1>US:{this.state.us}</h1>
            <h1>ERUO:{this.state.euro}</h1>
            <h1>IND:{this.state.a}</h1>
            <button onClick={()=>this.convert()}>Convert</button>
            </>
        );
    }
}
export default Currency