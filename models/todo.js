const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    create,
    deleteOne
  };

  function deleteOne(id) {
      todos.splice(id, 1);
  }
  
  function create(todo) {
    todos.push(todo);
  }

  function getAll() {
    return todos;
  }