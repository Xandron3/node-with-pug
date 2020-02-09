const axios = require('axios');

module.exports = class Todo {
  static async fetchAll() {
    const todoList = await axios('https://jsonplaceholder.typicode.com/todos', {
      params: {
        userId: 1,
      },
    });

    return todoList.data;
  }
}