import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Parent Page</h2>
                <Child name="John Smith" age={30} />

            </div>
        )
    }
}

export default Parent;