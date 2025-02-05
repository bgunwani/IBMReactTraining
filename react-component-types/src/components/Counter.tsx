import { Component } from "react";

class Counter extends Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <h2>Counter App</h2>
                <p className="fs-4">Count: {this.state.count}</p>
                <button className="btn btn-sm btn-info me-2" onClick={this.increment}> + Increment</button>
                <button className="btn btn-sm btn-danger" onClick={this.decrement}> - Increment</button>
            </div>
        )
    }
}

export default Counter;