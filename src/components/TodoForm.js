import React from "react";

class TodoForm extends React.Component{
   constructor() {
       super();
   }

   handleAdd = (e) => {
       e.preventDefault()
       this.props.add(this.props.input)
   }
    render(){
    return (
        <div>
            <form onSubmit={this.handleAdd}>
                <input 
                    value={this.props.input}
                    onChange={this.props.change} 
                    type='text'
                    placeholder="New Task"
                    name='todoInput'
                    id='todoInput'>
                    
                </input>
                <button>Add</button>
            </form>
        </div>
    )}
}
export default TodoForm