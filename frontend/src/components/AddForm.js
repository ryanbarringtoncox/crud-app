import React, { Component } from 'react';

class AddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPersonHandler(this.state);
    this.setState({
      name: '',
      job: '',
    });
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  handleJobChange = (e) => {
    this.setState({
      job: e.target.value,
    });
  }

  render() {

    return (
      <div>
        <h2>Add</h2>
        <form className="AddForm">
          <div className="form-group">
            <label>Name</label>
            <input type="text" onChange={this.handleNameChange} className="form-control" id="name" placeholder="Enter name" value={this.state.name}/>
            <label>Job</label>
            <input type="text" onChange={this.handleJobChange} className="form-control" id="job" placeholder="Enter job" value={this.state.job}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddForm;
