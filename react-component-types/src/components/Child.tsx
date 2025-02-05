import { Component } from "react";

interface MyProps {
    name: string;
    age: number;
}

class Child extends Component<MyProps> {
    render() {
        return (
            <div className="container mt-5">
                <h4>Child Page</h4>
                <p>Name: {this.props.name} | age: {this.props.age}</p>
            </div>
        )
    }
}

export default Child;