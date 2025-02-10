import { useNavigate } from "react-router-dom";
import { useCustomerContext } from "../context/CustomerContext";
import { useState } from "react";

const AddCustomer = () => {
    const { addCustomer } = useCustomerContext();
    const navigate = useNavigate();

    // State for Form Inputs
    const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

    // Handle Input Change
    const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomer({ ...customer, [e.target.name]: [e.target.value] });
    }

    // validate form
    const validate = () => {
        let newErrors = { name: '', email: '', phone: '' };
        if (!customer.name) newErrors.name = "Name is Required";
        if (!customer.email) newErrors.email = "Email is Required";
        setErrors(newErrors);
        return Object.values(newErrors).every((err) => err === "");
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        addCustomer(customer);
        navigate("/customers");
    }

    return (
        <>
            <div className="container mt-5">
                <h2>Add New Customer</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" value={customer.name} onChange={handlChange} />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" value={customer.email} onChange={handlChange} />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <button type="submit" className="btn btn-sm btn-primary">Add Customer</button>
                </form>
            </div>
        </>
    )
}

export default AddCustomer;