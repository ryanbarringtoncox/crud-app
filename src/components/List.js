import React, { Component } from 'react';

class List extends Component {

  handleDelete = id => {
    this.props.deletePersonHandler(id);
  }

  handleEdit = id => {
    this.props.editPersonHandler(id);
  }

  render() {

    const { people } = this.props;
    const peopleList = people.map((person) => (
      <li key={person.id}>{person.name} the {person.job} 
        <button onClick={() => this.handleEdit(person.id)}>Edit</button> 
        <button onClick={() => this.handleDelete(person.id)}>Delete</button>
      </li>)
    );

    return (
      <div className="List">
        <ul>
          {peopleList}
        </ul>
      </div>
    )
  }
}

export default List;
