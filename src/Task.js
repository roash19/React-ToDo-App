import React, { Component } from 'react';

class Task extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: this.props.name,
      complite: false
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  handleComplite = () => {
    this.setState({
      complite: !this.state.complite
    })
  };

  render() {
    const styled = this.state.complite ? "taskComplite" : "";

    return (
      <li className="d-flex align-items-center mb-1">

        {this.props.visibleInput ?
          <div className="d-flex align-items-center">
            <input type="text"
                   className="form-control mr-3 input-edit"
                   value={this.state.value}
                   onChange={this.handleChange}
                   autoFocus="true"/>
            <button className="btn btn-success mr-3" onClick={() => this.props.saveEdit(this.state.value, this.props.index)}>Save</button>
          </div>
          :
          <div className="d-flex align-items-center">
            <p className={`task-text mr-3 ${styled}`} onClick={this.handleComplite}>{this.props.name}</p>
            <button className="btn btn-info mr-3" onClick={() => this.props.editTask(this.props.index)}>Edit</button>
          </div>}

        <button className="btn btn-danger" onClick={() => this.props.deleteTask(this.props.index)}>Delete</button>
      </li>
    );
  }
}

export default Task;
