import React from "react"
class Incdec extends React.Component{
    constructor()
    {
        super()
        this.state={
            count:0,
            disableinc:false,
            disabledec:true
        }
    }
    inc()
    {
       
            if(this.state.count<15)
            {
                this.setState({
                    count:this.state.count+1
             })
             if(this.state.count>=0&&this.state.count<=15)
             {
                this.setState({
                    disableinc:false,
                    disabledec:false
                })
             }
            }
            else{
                this.setState({
                    disableinc:true
                })
            }
            
    }
    dec()
    {
        
            if(this.state.count>0)
            {
                this.setState({ count:this.state.count-1
                })
                if(this.state.count>=0&&this.state.count<=15)
             {
                this.setState({
                    disableinc:false,
                    disabledec:false
                })
             }
            }
            else{
                this.setState({
                    disabledec:true
                })
            }
   
    }
    render()
    {
        return(
            <>
            {this.state.count}
            <button disabled={this.state.disableinc} onClick={()=>this.inc()}>Inc</button>
            <button disabled={this.state.disabledec}onClick={()=>this.dec()}>Dec</button>
            </>
        )
    }
}
export default Incdec