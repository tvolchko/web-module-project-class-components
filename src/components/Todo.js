import React from "react";

class Todo extends React.Component {
    constructor() {
        super();
    }
    itemToggle = () => {
        this.props.toggle(this.props.task)
    }
    render() {
        return (
            <div onClick={this.itemToggle} className={this.props.task.completed ? 'complete' : 'incomplete'}>
                <p>{this.props.task.task}</p>
            </div>
        )
    }
}
export default Todo