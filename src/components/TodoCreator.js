import React, { Component } from 'react'

export class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            newItemText:""
        }
    }

    updateNewTextValue = (event) => {
        this.setState({
            newItemText: event.target.value 
        });
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: ""})
    }

    render() {
        return (
        <div>
          <input type="text" className="form-control" 
                  value={this.state.newItemText} 
                  onChange={this.updateNewTextValue}/>
          <button className="btn btn-sm btn-primary my-2" onClick={this.createNewTodo}>
            Add
          </button>
        </div>
        )
    }
}

export default TodoCreator
