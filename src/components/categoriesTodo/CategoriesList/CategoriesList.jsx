import Category from '../Category/Category';
import styles from './CategoriesList.module.scss';

function CategoriesList({ categories, changeCategory }) {
  return (
    <div className={styles.list}>
      {categories.map((category, index) => (
        <Category
          key={index}
          category={category}
          changeCategory={changeCategory}
        />
      ))}
    </div>
  );
}

export default CategoriesList;
