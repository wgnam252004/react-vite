import './style.css'

const MyComponent = () => {
    const string = "Hello World!";
    const number = 20;
    const boolean = true;
    const nullValue = null;
    const array = [1, 2, 3, 4, 5];
    const object = {
        name: "Quang Nam",
        age: 20,
        address: "Tay Ho"
    }
    return (
        <>
            <div>
                {console.log("Hello World!")}
            </div>
            <div className="name">Quang Nam & {number} & {string} &  {boolean} & {nullValue} & {array} & {object} </div>
        </>
    );
}

export default MyComponent;