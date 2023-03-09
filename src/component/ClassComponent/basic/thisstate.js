import React from "react";
class Thisstate extends React.Component{
    constructor(){
        super()
        this.state={
            message:"weclome"
            // name:"guest"
        }
    }
    change()
    {
        this.setState({
            message:"Ragu"
        })
    }
    render()
    {
        return(
            <>
            <h1>{}{this.state.message}</h1>
            <button onClick={()=>this.change()}>subcribe</button>
            </>
        );
    }
}
export default Thisstate;