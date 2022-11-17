import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Category.module.scss';

function Category({ category, changeCategory, deleteCategory }) {
  return (
    <div className={styles.item}>
      <button
        onClick={() => changeCategory(category.text)}
        className={`${styles.item__button} ${
          category.isPressed ? styles.item__button_active : ''
        }`}
      >
        {category.text}
      </button>
      <HiOutlineTrash
        onClick={() => deleteCategory(category)}
        className={
          category.text !== 'все' ? styles.item__delete : styles.item__none
        }
      />
    </div>
  );
}

export default Category;
