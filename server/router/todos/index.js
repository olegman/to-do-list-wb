const express = require('express');
const {
    getTodosController,
    addTodoController,
    editTodoController,
    changeCheckTodoController,
    deleteTodoController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

todosRouter.post('/getTodos', getTodosController);
todosRouter.post('/addTodo', addTodoController);
todosRouter.post('/editTodo', editTodoController);
todosRouter.post('/changeCheckTodo', changeCheckTodoController);
todosRouter.post('/deleteTodo', deleteTodoController);

module.exports.todosRouter = todosRouter;
