import styles from './SelectList.module.scss';

function SelectList({ task, categories, changeSelect }) {
  return (
    <select
      onChange={e => changeSelect(task.id, e.target.value)}
      value={task.select}
      className={styles.select}
      disabled={task.isChecked}
    >
      {categories.map((category, index) => (
        <option key={category.id}>{category.text}</option>
      ))}
    </select>
  );
}

export default SelectList;
