import React from "react";
import styles from "./TodoItem.style";

const TodoItem = (props) => {
  const { task, deleteTask, completeTask } = props;
  return (
    <div>
      <div style={styles.taskContainer}>
        <div style={styles.taskWrapper}>
          <p
            style={{
              ...styles.task,
              textDecoration: task.completed ? "line-through" : "",
            }}
          >
            {task.text}
          </p>
          <div style={styles.iconWrapper}>
            <i
              className="fas fa-check-circle"
              style={styles.completedIcon}
              onClick={() => completeTask(task.text)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={styles.deleteIcon}
              onClick={() => {
                deleteTask(task.text);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
