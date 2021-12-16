import React, { useState } from "react";
import styles from "./AddTodo.style";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");
  const { addTask } = props;
  return (
    <div>
      <input
        style={styles.inputField}
        placeholder="Enter Todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        style={styles.submitButton}
        onClick={() => {
          addTask(todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
