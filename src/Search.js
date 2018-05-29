import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ""
    }
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  clearInput = () => {
    this.setState({
      value: ""
    })
  };

  render() {
    var error;
    if(this.props.error === ""){
      error = <p className="error text-danger">Please enter a task</p>
    } else if(this.props.error === true) {
      error = <p className="error text-danger">Task already exists.</p>
    } else error = false;

    return (
      <div>
        <div className="d-flex">
          <input className="form-control mr-2"
                 type="text"
                 value={this.state.value}
                 onChange={this.handleChange.bind(this)}/>
          <button className="btn btn-primary"
                  onClick={() => {this.props.createTask(this.state.value); this.clearInput()}}>Create</button>
        </div>
        {error}
    </div>
    );
  }
}

export default Search;
