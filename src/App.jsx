import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.scss';
import CategoriesTasks from './components/categoriesTodo/CategoriesTasks';
import MainTodo from './components/mainTodo/MainTodo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([
    { text: 'все', isPressed: true },
  ]);
  const [clickedCategory, setClickedCategory] = useState('все');

  // Добавление category
  const addCategoriesHandle = text => {
    if (!text) {
      return alert('категория не может быть пустой');
    }

    if (categories.filter(category => category.text === text).length) {
      return alert('данная категория уже есть');
    }

    setCategories([...categories, { text, isPressed: false }]);
  };

  // Изменение category
  const changeCategoryHandle = text => {
    setCategories(
      categories.map(category => {
        return text === category.text
          ? { ...category, isPressed: true }
          : { ...category, isPressed: false };
      })
    );
    setClickedCategory(text);
  };

  // Добавление task
  const addTackHandle = text => {
    if (!text) {
      return alert('задача не может быть пустой');
    }

    if (tasks.filter(task => task.text === text).length) {
      return alert('данная задача уже есть');
    }

    setTasks([
      ...tasks,
      {
        text,
        id: uuid(),
        isChecked: false,
        select: 'все',
      },
    ]);
  };

  // Удаление task
  const deleteTackHandle = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Изменение check в task
  const CheckedTaskHandle = id => {
    setTasks(
      tasks.map(task =>
        id === task.id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  // Изменение select в task
  const changeSelectHandle = (id, option) => {
    setTasks(
      tasks.map(task => (id === task.id ? { ...task, select: option } : task))
    );
  };

  return (
    <div className='Todo'>
      <CategoriesTasks
        categories={categories}
        addCategories={addCategoriesHandle}
        changeCategory={changeCategoryHandle}
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
