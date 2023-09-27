const express = require('express');
const {
    getTodosController,
    addTodoController,
    updateTodoController,
    changeCheckTodoController,
    deleteTodoController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

todosRouter.post('/getTodos', getTodosController);
todosRouter.post('/addTodo', addTodoController);
todosRouter.post('/updateTodo', updateTodoController);
todosRouter.post('/changeCheckTodo', changeCheckTodoController);
todosRouter.post('/deleteTodo', deleteTodoController);

module.exports.todosRouter = todosRouter;
