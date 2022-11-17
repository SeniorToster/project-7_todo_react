import AddCategories from './AddCategory/AddCategory';
import CategoriesList from './CategoriesList/CategoriesList';
import styles from './CategoriesTasks.module.scss';

function CategoriesTasks({ categories, addCategories, changeCategory }) {
  return (
    <div className={styles.categories}>
      <h2 className={styles.categories__title}>Категории</h2>
      <AddCategories addCategories={addCategories} />
      <CategoriesList categories={categories} changeCategory={changeCategory} />
    </div>
  );
}

export default CategoriesTasks;
