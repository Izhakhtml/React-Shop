import React from "react";
class CannedFood extends React.Component{
    constructor(props){
    super(props)
    this.state ={cannedFood:"",array:[]}
    this.event = this.ChangeName.bind(this)
    }
    ChangeName(e){
    this.setState({cannedFood:this.state.cannedFood=e.target.parentElement.children[2].value})
    this.setState({array:this.state.array=this.state.cannedFood})      
    }
    render(){
        return(
            <div>
                <h2 id="second_title">Add CannedFood</h2>
                <h1>{this.state.cannedFood}</h1>
                <input type="text" />
                <button onClick={this.event}>Send</button>
                <li>{this.state.array}</li>
            </div>
        )
    }
}
export default CannedFood;