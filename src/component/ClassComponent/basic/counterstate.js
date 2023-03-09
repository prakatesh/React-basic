import React from "react";
class Counter extends React.Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    inc(){
        this.setState({
            count:this.state.count+5
        },()=>console.log(this.state.count))
    }
    render()
    {
        return(
            <>
            <h1>count{this.state.count}</h1>
            <button onClick={()=>this.inc()}>increament</button>
            </>
        );
    }
}
export default Counter