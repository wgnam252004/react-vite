import TodoData from './components/todo/TodoData.jsx';
import TodoNew from './components/todo/TodoNew.jsx';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from "react";
import Header from './components/layout/header.jsx';
import Footer from './components/layout/footer.jsx';


const App = () => {

  const [todoList, setTodoList] = useState([
    // {id : 1, name: "Learning React"},
    // {id : 2, name: "Watching Youtube"}
  ]);


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }

    setTodoList([...todoList, newTodo]);
  }


  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <>
      <Header />
      
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          <div className="todo-image">
            <img src={reactLogo} className='logo' />
          </div>

        }
      </div>

      <Footer />
    </>
  )
}

export default App;
