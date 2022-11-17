import Category from '../Category/Category';
import styles from './CategoriesList.module.scss';

function CategoriesList({ categories, changeCategory, deleteCategory }) {
  return (
    <div className={styles.list}>
      {categories.map((category, index) => (
        <Category
          key={category.id}
          category={category}
          changeCategory={changeCategory}
          deleteCategory={deleteCategory}
        />
      ))}
    </div>
  );
}

export default CategoriesList;
