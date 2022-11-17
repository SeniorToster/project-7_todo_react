import AddCategories from './AddCategory/AddCategory';
import CategoriesList from './CategoriesList/CategoriesList';
import styles from './CategoriesTodo.module.scss';

function CategoriesTodo({
  categories,
  addCategories,
  changeCategory,
  deleteCategory,
}) {
  return (
    <div className={styles.categories}>
      <h2 className={styles.categories__title}>Категории</h2>
      <AddCategories addCategories={addCategories} />
      <CategoriesList
        categories={categories}
        changeCategory={changeCategory}
        deleteCategory={deleteCategory}
      />
    </div>
  );
}

export default CategoriesTodo;
