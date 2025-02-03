import React from "react";


// Functional Component using TypeScript
const Users: React.FC = () => {

    var message = "User List";
    var users = [
        { id: 101, name: 'King Kochhar', age: 23 },
        { id: 102, name: 'Gautam Bhalla', age: 32 },
        { id: 103, name: 'Shreya Sharma', age: 20 },
        { id: 104, name: 'Roger Lee', age: 12 },
        { id: 105, name: 'John Smith', age: 34 }
    ]

    return (
        <>
            <h2>{message}</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <p>{user.name} - {user.age}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Users;
