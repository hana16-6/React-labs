import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Add a TODO</h3>
      <div>
        <form className=" w-50 m-auto" onSubmit={handleSubmission}>
          <label>Title</label>
          <input
            className="form-control my-4"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="form-label">Content</label>
          <textarea
            className="form-control my-4"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
