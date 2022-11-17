import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import styles from './AddCategory.module.scss';

function AddCategory({ addCategories }) {
  const [text, setText] = useState('');

  const submitCategory = e => {
    e.preventDefault();
    addCategories(text);
    setText('');
  };

  return (
    <div>
      <form
        onSubmit={submitCategory}
        className={styles.newCategories}
        action=''
      >
        <input
          maxLength={20}
          placeholder='Добавить категорию'
          className={styles.newCategories__input}
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className={styles.newCategories__add}>
          <AiFillPlusCircle />
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
