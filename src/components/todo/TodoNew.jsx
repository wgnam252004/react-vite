const TodoNew = (props) => {
    console.log(">>> check props", props)
    const { addNewData } = props;

    // addNewData("Quang Nam");
    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;