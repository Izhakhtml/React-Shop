import React from "react";
class CannedFood extends React.Component{
    constructor(props){
    super(props)
    this.state ={cannedFood:"",array:[]}
    this.event = this.ChangeName.bind(this)
    }
    ChangeName(e){
        this.setState({cannedFood:this.state.cannedFood = e.target.parentElement.children[2].value})
        this.setState({array:this.state.array = this.state.cannedFood});
        let listId = document.getElementById("ul_list")
        listId.innerHTML+=`<li>${this.state.array}</li>`    
    }
    render(){
        return(
            <div>
                <h2 id="second_title">Add CannedFood</h2>
                <h1>{this.state.cannedFood}</h1>
                <input type="text" />
                <button onClick={this.event}>Send</button>
                <ul id="ul_list"></ul>
            </div>
        )
    }
}
export default CannedFood;