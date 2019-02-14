export const ADD_PERSON = 'ADD_PERSON';
export const UPDATE_PERSON_TO_EDIT = 'UPDATE_PERSON_TO_EDIT';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export function addPerson(payload) {
  return {
    type: ADD_PERSON,
    payload,
  }
}

export function deletePerson(payload) {
  console.log("deletePerson action called")
  return {
    type: DELETE_PERSON,
    payload,
  }
}

export function updatePersonToEdit(payload) {
  return {
    type: UPDATE_PERSON_TO_EDIT,
    payload,
  }
}

export function updatePerson(payload) {
  return {
    type: UPDATE_PERSON,
    payload,
  }
}
