const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      success: true,
      message: "Successfully fetch todos",
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = new Todo({
      title,
      description
    });
    const newTodo = await todo.save();
     return res.status(201).json({
       success: true,
       message: "New todo created successfully",
       data: newTodo,
     });
  } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
  }
};
  
const updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, { title, description });
    if (!updateTodo) {
      return res.status(200).json({
        success: true,
        message: "Todo updated successfully",
        data: updateTodo,
      });
    }
  } catch (err) {
     return res.status(500).json({
       success: false,
       message: "Server error. Please try again.",
       error: err.message,
     });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
     if (!deleteTodo) {
       return res.status(200).json({
         success: true,
         message: "Todo deleted successfully",
         data: deleteTodo,
       });
     }
  } catch (err) {
     return res.status(500).json({
       success: false,
       message: "Server error. Please try again.",
       error: err.message,
     });
  }
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo }
