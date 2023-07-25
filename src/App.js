import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List using redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="enter a todo"
          />
          <button
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
            type="submit"
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  onClick={() => removeHandler(t)}
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    border: "1px solide white",
                    color: "white",
                    backgroundColor: "orangered",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
