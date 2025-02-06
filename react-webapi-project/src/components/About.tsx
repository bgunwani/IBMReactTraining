// const About = () => {
//     return (
//         <div className="text-center">
//             <h1 className="text-primary">About Page</h1>
//             <p className="text-muted">This is a all about our services.</p>
//         </div>
//     )
// }


import { Component } from "react";

class About extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>About Page</h2>
                <p>This is all about our products!</p>
            </div>
        )
    }
}

export default About;