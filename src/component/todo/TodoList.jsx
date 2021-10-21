const TodoList = ({ todos, deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul className="list-unstyled" key={i}>
            <li className="border">
              <div className="text d-flex">
                <div className="w-50 text-start mx-5 my-3">
                  <p>Title : {todo.title}</p>
                  <p>Content : {todo.content}</p>
                </div>
                <div className="w-50">
                  <button
                    type="button"
                    className="btn btn-danger my-3"
                    onClick={() => deleteTodo(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
