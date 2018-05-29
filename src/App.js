import React, { Component } from 'react';
import Search from './Search';
import Task from './Task';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      error: false,
      visibleInput : []
    };

  }

  createTask = (task) => {
    const {tasks, visibleInput} = {...this.state};
    const ecval = tasks.some(element => element === task );

    if (task === "") {
      this.setState({
        error: ""
      })
    } else if (ecval){
      this.setState({
        error : true
      })
    } else {
      tasks.push(task);
        visibleInput.push(false);
        this.setState({
          tasks : tasks,
          error: false
        })
      }
    };

  deleteTask = (index) => {
    const {tasks, visibleInput} = {...this.state};
    tasks.splice(index, 1);
    visibleInput.splice(index, 1);

    this.setState({
      tasks: tasks,
      visibleInput: visibleInput
    })
  };

  editTask = (index) => {
    const {visibleInput} = {...this.state};
    visibleInput[index] = true;

    this.setState({
      visibleInput: visibleInput
    })
  };

  saveEdit = (value, index) => {
    const {tasks, visibleInput} = {...this.state};
    tasks[index] = value;
    visibleInput[index] = false;

    this.setState({
      tasks: tasks,
      visibleInput: visibleInput
    })
  };

  render() {
    const tasks = this.state.tasks.map(
      (item, index) => <Task key={index}
                             index={index}
                             name={item}
                             visibleInput={this.state.visibleInput[index]}
                             deleteTask={this.deleteTask}
                             editTask={this.editTask}
                             saveEdit={this.saveEdit}/>
    );

    return (
      <div className="App">
        <h1>React ToDo App</h1>
        <Search createTask={this.createTask} error={this.state.error}/>
        <ul className="p-0 mt-5">
          {tasks}
        </ul>
      </div>
    );
  }
}

export default App;
