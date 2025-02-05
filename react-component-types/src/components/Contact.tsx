// const Contact = () => {
//     return (
//         <div className="text-center">
//             <h1 className="text-primary">Contact Page</h1>
//             <p className="text-muted">You can reach out to me if you have any queries or concerns</p>
//         </div>
//     )
// }


import { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Contact Page</h2>
                <p>You can reach out to us for any queries!</p>
            </div>
        )
    }
}

export default Contact;