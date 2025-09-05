const express = require('express');
const app = express();
app.use(express.json());

let todos = [];
let idCounter = 1;

app.post('/todos', (req, res) => {
    const { title } = req.body;
    const todo = { id: idCounter++, title };
    todos.push(todo);
    res.json(todo);
});

app.get('/todos', (req, res) => res.json(todos));

app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id == req.params.id);
    res.json(todo || {});
});


app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id == req.params.id);
    if (todo) todo.title = req.body.title;
    res.json(todo || {});
});


app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(t => t.id != req.params.id);
    res.json({ message: 'Deleted' });
});

app.listen(3009, () => console.log('Server running on port 3009'));
