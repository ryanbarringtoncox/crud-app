import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/List'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'
import { deletePerson, addPerson, updatePerson, updatePersonToEdit } from './actions/actions';
import { store } from './index.js'
import './App.css';

class App extends Component {
  
  addPersonHandler = person => {
    store.dispatch(addPerson(person));
  }

  deletePersonHandler = id => {
    store.dispatch(deletePerson(id));
  }

  editPersonHandler = id => {
    store.dispatch(updatePersonToEdit(id));
  }

  updatePersonHandler = person => {
    store.dispatch(updatePerson(person));
    // reset person to edit to -1
    store.dispatch(updatePersonToEdit(-1));
  }

  render() {
    const { people, personToEditId } = this.props;
    const personToEditObject = people.find(person => person.id === personToEditId);
    return (
      <div className="App">
        <List people={people} editPersonHandler={this.editPersonHandler} deletePersonHandler={this.deletePersonHandler}/>
        <hr />
        <AddForm addPersonHandler={this.addPersonHandler}/>
        <hr />
        <EditForm updatePersonHandler={this.updatePersonHandler} person={personToEditObject}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
