import './App.css';
import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import TodoBanner from './components/TodoBanner';
import TodoCreator from './components/TodoCreator';
import VisibilityControl from './components/VisibilityControl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Prashanth",
      todoItems: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Mom", done: false}
      ],
      showCompleted: false
    }
  }

  showCompletedTasks = (show) => {
    console.log(show);
    this.setState({
      showCompleted: show
    })
  }

  createNewTodo = (newTodoText) => {
    const item = this.state.todoItems.find(todo => todo.action === newTodoText);
    if(!item){
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {action: newTodoText, done: false}
        ]
      }, () => localStorage.setItem('todos', JSON.stringify(this.state)));
    }
  }

  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value 
    });
  }

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        return item.action === todo.action ? {...item, done: !item.done} : item;
      })
    });
  }

  todoTableRows = (doneValue) => {
    return this.state.todoItems.filter(item => item.done === doneValue)
                                .map(item => <TodoItem key={item.action} item={item} toggleTodo={this.toggleTodo}/>);
  }

  componentDidMount = () => {
    let data = localStorage.getItem('todos');
    if(data){
      this.setState(JSON.parse(data))
    }
  }

  render() {
    return (
      <div>
        <TodoBanner name={this.state.userName} todoCount={this.state.todoItems.filter(t => !t.done).length}/>
        <div className="container-fluid">
          <TodoCreator callback={this.createNewTodo}/>
          <table className="table table-striped bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {this.todoTableRows(false)}
            </tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
            <VisibilityControl description="Completed Tasks" 
                                isChecked={this.state.showCompleted}
                                callback={this.showCompletedTasks}/>
          </div>
          { this.state.showCompleted && 
            <table className="table table-striped table-hovered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {this.todoTableRows(true)}
              </tbody>
            </table>

          }
        </div>
      </div>
    );
  }
}

export default App;
