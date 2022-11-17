import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.scss';
import CategoriesTodo from './components/сategoriesTodo/CategoriesTodo';
import MainTodo from './components/mainTodo/MainTodo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([
    { text: 'все', isPressed: true, id: uuid() },
  ]);
  const [clickedCategory, setClickedCategory] = useState(categories[0].text);
  const [activeMenu, setActiveMenu] = useState(false);

  // Добавление category
  const addCategoriesHandle = text => {
    const noSpacesText = text.trim();

    if (!noSpacesText) return alert('категория не может быть пустой');

    if (categories.filter(category => category.text === noSpacesText).length)
      return alert('данная категория уже есть');

    setCategories([
      ...categories,
      { text: noSpacesText, isPressed: false, id: uuid() },
    ]);
  };

  // Изменение category
  const changeCategoryHandle = text => {
    const newCategories = categories.map(category => {
      return text === category.text
        ? { ...category, isPressed: true }
        : { ...category, isPressed: false };
    });
    setCategories(newCategories);
    setClickedCategory(text);
  };

  // Удаление category
  const deleteCategoryHandle = category => {
    const newTasks = tasks.map(task =>
      task.select === category.text
        ? { ...task, select: categories[0].text }
        : task
    );
    const newCategories = categories.filter(cater => cater.id !== category.id);

    if (category.text === clickedCategory) {
      newCategories[0].isPressed = true;
      setClickedCategory(categories[0].text);
    }

    setTasks(newTasks);
    setCategories(newCategories);
  };

  // Добавление task
  const addTackHandle = text => {
    const noSpacesText = text.trim();

    if (!noSpacesText) return alert('задача не может быть пустой');

    if (tasks.filter(task => task.text === noSpacesText).length)
      return alert('данная задача уже есть');

    setTasks([
      ...tasks,
      {
        text: noSpacesText,
        id: uuid(),
        isChecked: false,
        select: clickedCategory,
      },
    ]);
  };

  // Удаление task
  const deleteTackHandle = id => setTasks(tasks.filter(task => task.id !== id));

  // Изменение check в task
  const CheckedTaskHandle = id =>
    setTasks(
      tasks.map(task =>
        id === task.id ? { ...task, isChecked: !task.isChecked } : task
      )
    );

  // Изменение select в task
  const changeSelectHandle = (id, option) => {
    setTasks(
      tasks.map(task => (id === task.id ? { ...task, select: option } : task))
    );
  };

  return (
    <div className='Todo'>
      <CategoriesTodo
        categories={categories}
        addCategories={addCategoriesHandle}
        changeCategory={changeCategoryHandle}
        deleteCategory={deleteCategoryHandle}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <MainTodo
        clickedCategory={clickedCategory}
        tasks={tasks}
        addTack={addTackHandle}
        deleteTack={deleteTackHandle}
        CheckedTask={CheckedTaskHandle}
        categories={categories}
        changeSelect={changeSelectHandle}
      />
    </div>
  );
}

export default App;
