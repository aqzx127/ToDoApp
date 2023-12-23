const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log("Authorization Header:", req.headers.authorization);
    next();
});

const jwtCheck = auth({
  audience: 'https://mytodosapi.com/',
  issuerBaseURL: 'https://dev-qsh22qbc8oa4list.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);
app.use((req, res, next) => {
    console.log("After JWT Middleware:", req.user);
    next();
});

app.post('/api/todos', (req, res) => {
    const userId = req.auth.payload.sub; // The user ID from the JWT
    console.log("UserID ", userId);

    // Validate the user ID if necessary, and handle the todo creation
    // ...
    // Implement POST to Database (MongoDB)
    console.log("Request Auth", req.auth);
    console.log("Request Body", req.body);
    console.log(todos);
    res.send({ message: 'Todo created successfully by: ' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

