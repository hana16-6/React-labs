import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import { addTodoAction, deleteTodoAction } from "../../redux/todo";

import "./Todo.css";
function Todo() {
  const todostate = useSelector((state) => state.todoReducer.todos);
  console.log(todostate);
  const dispatch = useDispatch();
  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };

  const deleteTodo = (index) => {
    dispatch(deleteTodoAction(index));
    console.log(index);
  };

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todostate} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
