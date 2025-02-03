
import React from "react";

const Counter: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const [isToggled, setIsToggled] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const toggle = () => {
        setIsToggled(!isToggled);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Submitted: ${inputValue}`)
    }



    return (
        <>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>|
            <button onClick={handleDecrement}>Decrement</button> |
            <button onClick={toggle}>
                {isToggled ? "Toggle On" : "Toggle Off"}
            </button>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>

        </>
    )
}

export default Counter;