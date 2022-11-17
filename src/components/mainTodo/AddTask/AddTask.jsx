import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import styles from './addTask.module.scss';

function AddTask({ addTasks }) {
  const [text, setText] = useState('');

  const changeText = e => {
    e.preventDefault();
    addTasks(text);
    setText('');
  };

  return (
    <form onSubmitCapture={changeText} action='' className={styles.newTack}>
      <input
        placeholder='Добавить новую задачу в категорию «Все»'
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        className={styles.newTack__input}
      />
      <button className={styles.newTack__add}>
        <AiFillPlusCircle />
      </button>
    </form>
  );
}

export default AddTask;
