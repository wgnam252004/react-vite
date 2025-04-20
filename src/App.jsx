import TodoData from './components/todo/TodoData.jsx';
import TodoNew from './components/todo/TodoNew.jsx';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';


const App = () => {

  const quangnam="Quang Nam";
  const Age= 20;
  const data = {
    adress: "Ha noi",
    country: "Viet Nam"
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData 
          name={quangnam}
          age={Age}
          data={data}
        />
        <div className="todo-image">
          <img src={reactLogo} className='logo' />
        </div>
      </div>  
    </>
  )
}

export default App;
