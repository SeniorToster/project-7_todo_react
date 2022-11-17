import { FaCheck } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import SelectList from '../SelectList/SelectList';
import styles from './Task.module.scss';

function Task({ task, deleteTask, CheckedTask, categories, changeSelect }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.wrapper__check} ${
          task.isChecked ? styles.wrapper__check_active : ''
        }`}
        onClick={() => CheckedTask(task.id)}
      >
        <FaCheck />
      </div>
      <span
        className={`${styles.wrapper__text} ${
          task.isChecked ? styles.wrapper__text_active : ''
        }`}
      >
        {task.text}
      </span>
      <SelectList
        task={task}
        categories={categories}
        changeSelect={changeSelect}
      />
      <HiOutlineTrash
        className={styles.wrapper__delete}
        onClick={() => deleteTask(task.id)}
      />
    </div>
  );
}

export default Task;
