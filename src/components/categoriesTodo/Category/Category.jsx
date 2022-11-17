import styles from './Category.module.scss';

function Category({ category, changeCategory }) {
  return (
    <button
      onClick={() => changeCategory(category.text)}
      className={`${styles.item} ${
        category.isPressed ? styles.item_active : ''
      }`}
    >
      {category.text}
    </button>
  );
}

export default Category;
