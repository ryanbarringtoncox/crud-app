## CRUD

This is an excercise in web dev and a work in progress.  I wanted to build something from scratch using React, Redux, Django and Webpack.

CRUD stands for:

  - *Create* people with names, jobs (for now).
  - *Read* people, list in GUI.
  - *Update* (aka edit) people through form.
  - *Delete* people.


### Frontend

````
cd frontend/
npm install
````

Installs frontend deps in node_modules dir.

` yarn start`

Runs the frontend app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Backend

Create a virtual python environment and activate it.  venv/ dir already added to gitignore. Install requirements.

```
virtualenv venv
source  venv/bin/activate
pip install -r requirements.txt
```

Install Django.

### TODOs:
  - integrate react and django templates
  - integrate react and django api/models
  - style it
  - add client-side validation
  - add server-side validation
  - add clients model in db, with proper associations
  - add clients to frontend, make it useable and easy
  - switch to Django rest API?
  - look into security
