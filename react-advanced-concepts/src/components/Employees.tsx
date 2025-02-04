import { useEffect, useState } from "react";
import { Employee } from "../types/Emplolyee";

const API_URL = `http://localhost:3000/employees`;

const Employees = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setEmployees(data);
                setLoading(false);
            })
            .catch((error) => { console.error("Error Fetching Employees", error) })
    }, []);



    return (
        <div className="container">
            <div className="text-center text-primary mb-4">Employee Management</div>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-boardered">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )
}

export default Employees;