import { useEffect, useState } from "react";
import { Employee } from "../types/Emplolyee";

const API_URL = `http://localhost:3000/employees`;

const Employees = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [form, setForm] = useState<Employee>({ name: "", email: "" });

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setEmployees(data);
                setLoading(false);
            })
            .catch((error) => { console.error("Error Fetching Employees", error) })
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));

        //setForm({ ...form, [e.target.name]: e.target.value });
    }

    const addEmployee = () => {
        console.log(JSON.stringify(form));
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
            .then((res) => res.json())
            .then((newEmployee) => {
                setEmployees([...employees, newEmployee]);
                setForm({ name: "", email: "" })
            })
            .catch((error) => { console.error(error); })
    }

    const deleteEmployee = (id: number) => {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => setEmployees(employees.filter((emp) => emp.id !== id)))
            .catch((error) => console.error(error))
    }

    const updateEmployee = (id: number) => {
        fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
            .then(() => {
                setEmployees(employees.map((emp) => (emp.id === id ? { ...form, id } : emp)));
                setForm({ name: "", email: "" })
            })
            .catch((error) => console.error(error))

    }

    return (
        <div className="container">
            <h3 className="text-center text-primary">Employee Management</h3>

            {/* Employee Form */}
            <div className="card p-4 mb-4 shadow">
                <h5>Add or Update Employee</h5>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange} />

                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange} />

                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-success me-2" onClick={addEmployee}>Add</button>
                    <button className="btn btn-primary" onClick={() => updateEmployee(form.id!)}>Update</button>
                </div>

            </div>

            {/* Rendering Employee List */}
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>
                                        <button className="btn btn-sm btn-info me-2" onClick={() => setForm(emp)}>Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => deleteEmployee(emp.id!)}>Delete</button>
                                    </td>
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