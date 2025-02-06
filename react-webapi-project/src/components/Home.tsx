
// const Home = () => {
//     return (
//         <div className="text-center">
//             <h1 className="text-primary">Welcome to Home Page</h1>
//             <p className="text-muted">This is a simple React app using Bootstrap.</p>
//         </div>
//     )
// }
// export default Home;



import { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Home Page</h2>
                <p>Welcome to Home Page!</p>
            </div>
        )
    }
}

export default Home;