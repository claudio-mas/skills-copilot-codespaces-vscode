// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Create comments array
const comments = [
    {
        name: 'John Doe',
        comment: 'Hello World!'
    },
    {
        name: 'Jane Doe',
        comment: 'Hi, there!'
    }
];

// Create GET /comments route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create POST /comments route
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});