import AddTask from './AddTask/AddTask';
import TasksList from './TaskList/TasksList';
import styles from './MainTodo.module.scss';

function MainTodo({
  tasks,
  addTack,
  deleteTack,
  CheckedTask,
  categories,
  changeSelect,
  clickedCategory,
}) {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Все Задачи</h1>
      <AddTask addTasks={addTack} />
      <TasksList
        clickedCategory={clickedCategory}
        tasks={tasks}
        deleteTask={deleteTack}
        CheckedTask={CheckedTask}
        categories={categories}
        changeSelect={changeSelect}
      />
    </div>
  );
}

export default MainTodo;
