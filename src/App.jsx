import TodoData from './components/todo/TodoData.jsx';
import TodoNew from './components/todo/TodoNew.jsx';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from "react";


const App = () => {

  const [todoList, setTodoList] = useState([
    {id : 1, name: "Learning React"},
    {id : 2, name: "Watching Youtube"}
  ]);

  const quangnam = "Quang Nam";
  const Age = 20;
  const data = {
    adress: "Ha noi",
    country: "Viet Nam"
  }

  const addNewData = (name) => {
    alert(`Hello ${name}`)
  }


  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewData={addNewData}
        />
        <TodoData
          name={quangnam}
          age={Age}
          data={data}
          todoList={todoList}
        />
        <div className="todo-image">
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App;
