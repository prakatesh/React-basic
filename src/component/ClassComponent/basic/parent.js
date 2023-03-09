import React from "react";
import Child from "./child";
class Parent extends React.Component{
    constructor()
    {
        super()
        this.state={
            mess:"parent"
        }
        /*this.welcome=this.welcome.bind(this)*/
    }
    welcome(a)
    {
        alert(`hello ${this.state.mess} from ${a}`)
        console.log(a)
    }
    
    render()
    {
        return(
            <>
            <Child g={()=>this.welcome()}/>
            </>
        );
    }
}
export default Parent

