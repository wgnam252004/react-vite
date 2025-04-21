const TodoNew = (props) => {
    console.log(">>> check props", props)
    const { addNewData } = props;

    const handleClick = () => {
        alert("Click me")
    }

    const handleOnChange = (event) => {
        console.log(">>> check onChange", event.target.value)
    }
    // addNewData("Quang Nam");
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => {handleOnChange(event.target.value)}}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;