import React, { useState, Fragment } from "react";

interface TodoProps {
  task: string;
  completed: boolean;
}

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (val: string): void => {
    const newTodos: TodoProps[] = [...todos, { task: val, completed: false }];
    setTodos(newTodos);
    setValue("");
  };

  const changeState = (index: number, completed: boolean): void => {
    //setCompleted(completed);
    const newTodos: TodoProps[] = [...todos];
    newTodos[index].completed = !completed;
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>ToDo App</h1>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      &nbsp;&nbsp;
      <button
        type="button"
        onClick={() => {
          addTodo(value);
        }}
      >
        Add ToDo
      </button>
      <section>
        {todos.map((todo: TodoProps, index: number) => {
          return (
            <Fragment key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => changeState(index, todo.completed)}
                />
                {todo.task}
              </div>
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default TodoApp;
