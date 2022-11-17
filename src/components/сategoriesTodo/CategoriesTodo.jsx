import { GiHamburgerMenu } from 'react-icons/gi';
import AddCategories from './AddCategory/AddCategory';
import CategoriesList from './CategoriesList/CategoriesList';
import styles from './CategoriesTodo.module.scss';

function CategoriesTodo({
  categories,
  addCategories,
  changeCategory,
  deleteCategory,
  activeMenu,
  setActiveMenu,
}) {
  return (
    <>
      <GiHamburgerMenu
        onClick={() => setActiveMenu(!activeMenu)}
        className={styles.menu}
      />
      <div
        className={`${styles.categories} ${
          activeMenu ? styles.categories_active : ''
        }`}
      >
        <h2 className={styles.categories__title}>Категории</h2>
        <AddCategories addCategories={addCategories} />
        <CategoriesList
          categories={categories}
          changeCategory={changeCategory}
          deleteCategory={deleteCategory}
        />
      </div>
    </>
  );
}

export default CategoriesTodo;
