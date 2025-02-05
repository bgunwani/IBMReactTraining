import { useEffect, useState } from "react";
import { User } from "../types/User";

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json()) // Promise is resolved.
            .then((data: User[]) => {
                setUsers(data);
                setLoading(false);
                console.log(users);
                console.log(loading);
            })
            .catch((error) => { console.error("Error Fetching users: ", error) }) // Promise is Rejected.
    }, []);

    return (
        <div className="container">
            <h1 className="text-primary">Users List</h1>
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {users.map((user) => (
                        <div key={user.id} className="col-md-4 mb-4">
                            <div className="card shadow p-3">
                                <h5>{user.name}</h5>
                                <p className="card-text">
                                    <strong>Email:</strong>{user.email}<br />
                                    <strong>Phone:</strong>{user.phone}<br />
                                    <strong>Website:</strong>{user.website}<br />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Users;