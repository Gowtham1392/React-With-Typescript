import React, { useState, Fragment } from "react";

import "./App.css";

type FormElement = React.FormEvent<HTMLFormElement>;
interface TodoProps {
  text: string;
  complete: boolean;
}

const App = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const todoArray: TodoProps[] = [...todos, { text, complete: false }];
    setTodos(todoArray);
  };

  const completeTodo = (index: number): void => {
    const newTodo: TodoProps[] = [...todos];
    newTodo[index].complete = !newTodo[index].complete;
    setTodos(newTodo);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: TodoProps[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add ToDo</button>
      </form>
      <section>
        {todos.map((todo: TodoProps, index: number) => {
          return (
            <Fragment key={index}>
              <div>
                <div
                  style={{
                    textDecoration: todo.complete ? "line-through" : undefined
                  }}
                >
                  {todo.text}
                </div>
                <button type="button" onClick={() => completeTodo(index)}>
                  {todo.complete ? "Complete" : "Incomplete"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  &times;
                </button>
              </div>
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default App;
