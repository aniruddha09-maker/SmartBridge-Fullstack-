const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let users = [];

app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id != id);
  res.json({ message: "User deleted" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
