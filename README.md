# Desafio Latam: Database Access with Node II

The social network "Like Me" is developing its platform that allows the creation and deletion of posts and the interaction of likes.

In this challenge, a server is created that provides GET, POST, PUT and DELETE routes for queries and saves the posts in a PostgreSQL database with the pg package.

The server provides the following routes:

- `GET: api/posts` :  Returns a JSON with the registered posts from the database
- `GET: api/posts/:id` :  Returns a specific post from the database
- `POST: api/posts` : Allows you to enter a new post
- `PUT: api/posts/like/:id` : Allows you to increase likes to a post
- `DELETE: api/posts/:id` : Receives the id of a post and removes it from the database

<br>


Environment variables
-------
Connects node.js to the PostgreSQL server. To specify which database to connect to, create an `.env` file with the following structure, also available in the `.env.example` file.

To create the database follow the instruction of the `query.sql ` file.

```
.env

PGUSER=postgres 
PGHOST=localhost
PGPASSWORD=
PGDATABASE=likeme
PGPORT=5432
```

<br>


Client Application
-------
The client application that consumes the routes is located in the client folder and its a React application. To use it, inside the client directory, run in the terminal `npm run dev` after the backend is up:

- POST:  Fill in the 3 fields and click on add, you will see the post created on the right side of the screen.
- PUT: To like a post, click on the heart icon.
- DELETE: To delete a post, click on the cross.


<br>

Using [Thunder Client for VS Code](https://www.thunderclient.com/) or [Postman](https://www.postman.com/) as a client application
-------
<br>

To get all posts:
```html
METHOD: GET 
ENDPOINT: localhost:3000/api/posts/
```
<br>

To get a specific post:

```
METHOD: GET
ENDPOINT: localhost:3000/api/posts/{id}
```
<br>

To add a post, the following structure must be followed (the id is serial so, to create a post you don't need to write this data):


```
METHOD: POST
ENDPOINT: localhost:3000/api/posts/
```
```json
BODY JSON

{
    "titulo": "",
    "img": "",
    "descripcion": ""
}
```

To like a post:

```
METHOD: PUT
ENDPOINT: localhost:3000/api/posts/like/{id}
```

To delete a post:

```
METHOD: DELETE
ENDPOINT: localhost:3000/api/posts/{id}
```

<br>

Database
-------
- [PostgreSQL](https://www.postgresql.org/)


Backend
-------

- [Node.js](https://nodejs.dev/)


Dependencies
-------

CLIENT:

- This react project was created with [Vite](https://vitejs.dev/guide/)
- [Axios](https://axios-http.com/) : A promise-based HTTP Client for node.js and the browser 
- The [React-toastify](https://www.npmjs.com/package/react-toastify) library was also used to implement notifications on the app
- To install dependencies run: `npm install` inside the `client` folder
- To run de app: `npm run dev`

SERVER:

- Framework [Express](https://expressjs.com/es/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) : For providing a Connect/Express middleware that can be used to enable CORS with various options 
- [node-postgres: pg](https://node-postgres.com/) : Collection of node.js modules to interact with PostgreSQL database 
- Environment variables [dotenv](https://www.npmjs.com/package/dotenv)
- To install dependencies run: `npm install` inside the `server` folder
- devDependencies [Nodemon](https://www.npmjs.com/package/nodemon) for run server and automatically restarting the node application when file changes, in the terminal run: `npm run dev`

<br>

**Important: Run first the backend and then run the client application**



