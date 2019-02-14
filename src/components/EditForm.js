import React, { Component } from 'react';

class EditForm extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      job: '',
    });
  }

  componentDidUpdate(nextProps) {
    const {person} = this.props;
    if (nextProps.person !== person) {
      if (person) {
        this.setState({
          name: person.name,
          job: person.job,
          id: person.id,
        });
      } else {
        this.setState({
          name: '',
          job: '',
        });
      }
    }
  }

  handleSubmit = e => {
    // Remember to prevent default which reloads page, re-inits state
    e.preventDefault();
    this.props.updatePersonHandler(this.state);
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

    const { person } = this.props;

    return (
      <div>
        <h2>Edit</h2>
        <form className="EditForm">
          { person &&
            <div className="form-group">
              <label>Name</label>
              <input type="text" onChange={this.handleNameChange} className="form-control" id="name" placeholder="Enter name" value={this.state.name}/>
              <label>Job</label>
              <input type="text" onChange={this.handleJobChange} className="form-control" id="job" placeholder="Enter job" value={this.state.job}/>
            </div>
          }
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditForm;
