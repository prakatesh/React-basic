import React from "react";
class Islog extends React.Component{
    constructor(){
        super()
        this.state={
            isloggned:false
            
        }
    }
    // render() {
    //     var g;
    // if(this.state.isloggned)
    // {
    //  g=<h1>is true</h1>
    // }
    // else g=<h1>is false</h1>
    //  return g
    // }

    render() {
      return this.state.isloggned?
      <h1>is true</h1>:
      <h1>is false</h1>
    }

}
export default Islog