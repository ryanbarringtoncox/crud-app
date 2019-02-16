## CRUD

This is an excercise in web dev and a work in progress.  I wanted to build something from scratch using React, Redux, Django and Webpack.

CRUD stands for:

  - *Create* people with names, jobs (for now).
  - *Read* people, list in GUI.
  - *Update* (aka edit) people through form.
  - *Delete* people.


### Frontend

Install frontend deps in node_modules dir and run local dev server.

```
cd frontend/
yarn install
yarn start
```
### Backend

Create a virtual python environment and activate it.  venv/ dir already added to gitignore. Install requirements. Run dev server.

```
virtualenv venv
source  venv/bin/activate
pip install -r requirements.txt
cd backend/
./manage.py runserver
```

### TODOs:
  - integrate react and django templates
  - integrate react and django api/models
  - unit tests to front and backend
  - style it
  - add client-side validation
  - add server-side validation
  - add clients model in db, with proper associations
  - add clients to frontend, make it useable and easy
  - switch to Django rest API?
  - security (fronted and backend)
