import React from "react";
import { connect } from "react-redux";
import AddTodo from "../components/AddTodo/AddTodo";
import TodoItem from "../components/TodoItem/TodoItem";
import { addTask, completeTask, deleteTask } from "../redux/actions";
import styles from "./Main.style";

export const Main = (props) => {
  return (
    <div style={styles.appContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Todo List</h1>
        <div style={styles.inputWrapper}>
          <AddTodo addTask={(todo) => props.addTask(todo)} />
          <hr style={styles.separator} />
        </div>
        {props.tasks.map((task, index) => {
          return (
            <TodoItem
              task={task}
              key={index}
              deleteTask={(task) => props.deleteTask(task)}
              completeTask={(task) => props.completeTask(task)}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.taskItems,
  };
};

const mapDispatchToProps = {
  addTask,
  deleteTask,
  completeTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
