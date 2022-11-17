import Task from '../Task/Task';
import styles from './TaskList.module.scss';

function TasksList({
  tasks,
  deleteTask,
  CheckedTask,
  categories,
  changeSelect,
  clickedCategory,
}) {
  return !tasks.length ? (
    <h2 className={styles.tasksZero}>Задач нет</h2>
  ) : (
    tasks.map(task => {
      const taskJsx = (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          CheckedTask={CheckedTask}
          categories={categories}
          changeSelect={changeSelect}
        />
      );
      if (clickedCategory === 'все') return taskJsx;
      return clickedCategory === task.select && taskJsx;
    })
  );
}

export default TasksList;
