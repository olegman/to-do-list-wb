const { todoModel } = require('../../models/todos');

const getTodosController = async (req, res) => {
    const { id } = req.body;

    const todos = await todoModel.value();

    res.status(200).json({
        jsonrpc: '2.0',
        result: {
            todos
        },
        id,
    });
};

const addTodoController = async (req, res) => {
    const {
        id,
        params: {
            name,
            description
        }
    } = req.body;

    const last = await todoModel.last().value();
    let todoId = 1;

    if (last) {
        todoId = last.id + 1;
    }

    await todoModel.push({
        id: todoId,
        name,
        description,
        date: new Date().toISOString(),
        check: false,
    }).write();

    res.status(200).json({
        jsonrpc: '2.0',
        result: {},
        id,
    });
};

const updateTodoController = async (req, res) => {
    const {
        id,
        params: {
            id: todoId,
            name,
            description
        }
    } = req.body;

    await todoModel
            .find({ id: todoId })
            .set('name', name)
            .set('description', description)
            .write();

    res.status(200).json({
        jsonrpc: '2.0',
        result: {},
        id,
    });
};

const deleteTodoController = async (req, res) => {
    const {
        id,
        params: { id: todoId },
    } = req.body;

    await todoModel.remove({ id: todoId }).write();

    res.status(200).json({
        jsonrpc: '2.0',
        result: {},
        id,
    });
};

module.exports = {
    getTodosController,
    addTodoController,
    updateTodoController,
    deleteTodoController,
};
