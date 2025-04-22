const TodoData = (props) => {

  const { todoList } = props;

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className={'todo-item'} key={item.id}>
            {item.name}
            <button>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default TodoData;