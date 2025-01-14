// In-memory storage for todos
let todos = [
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Learn Express", completed: true },
  ];
  
  // Controller for GET /todos
  const getTodos = (req, res) => {
    res.json(todos);
  };
  
  // Controller for POST /todos
  const createTodo = (req, res) => {
    const { text, completed } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }
    const newTodo = { id: todos.length + 1, text, completed: !!completed };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  };
  
  module.exports = { getTodos, createTodo };
  