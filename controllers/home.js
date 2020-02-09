const Todo = require('../models/todo');

const getHomePage = async (req, res) => {
  const todoList = await Todo.fetchAll();

  res.render('home', {
    title: 'Home Page',
    path: '/',
    cardTitle: 'Todos list',
    todoList,
  });
};

exports.getHomePage = getHomePage;
