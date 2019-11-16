import React, { useState } from "react";

import "./App.css";

type FormElement = React.FormEvent<HTMLFormElement>;

const App = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    setValue("");
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
    </div>
  );
};

export default App;
