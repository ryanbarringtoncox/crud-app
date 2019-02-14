import { DELETE_PERSON, UPDATE_PERSON, ADD_PERSON, UPDATE_PERSON_TO_EDIT } from '../actions/actions';

const initialState = {
  people : [
    {id: 1, name: 'Ryan', job: 'Programmer'},
    {id: 2, name: 'Emmy', job: 'Builder'},
    {id: 3, name: 'Ela', job: 'Lil Kid'},
  ],
  personToEditId: -1,
};

export const crudApp = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PERSON:
      return {
       ...state,
       people: [
        ...state.people,
        {
          // TODO: Fix this id when you add backend, so it's always unique
          id: state.people.length + 1,
          ...payload,
        }
       ]
      }
    case DELETE_PERSON:
      const filteredPeople = state.people.filter(person => person.id !== payload);
      return {
        ...state,
        people: filteredPeople,
      }
    case UPDATE_PERSON_TO_EDIT:
      return {
        ...state,
        personToEditId: payload,
      }
    case UPDATE_PERSON:
      const updatedPeopleState = [];
      state.people.forEach(person => {
        if (person.id === payload.id) {
          const updatedPerson = {
            id: person.id,
            name: payload.name,
            job: payload.job,
          } 
          updatedPeopleState.push(updatedPerson);
        } else {
          updatedPeopleState.push(person);
        }
      })
      return {
        ...state,
        people: updatedPeopleState,
      }
    default:
      return state;
  }
}

