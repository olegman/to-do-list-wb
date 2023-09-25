const express = require('express');
const {
    getTodosController,
    addTodoController,
    updateTodoController,
    deleteTodoController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

todosRouter.post('/getTodos', getTodosController);
todosRouter.post('/addTodo', addTodoController);
todosRouter.post('/updateTodo', updateTodoController);
todosRouter.post('/deleteTodo', deleteTodoController);

module.exports.todosRouter = todosRouter;
