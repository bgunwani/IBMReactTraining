import { Link } from "react-router-dom";
import { useCustomerContext } from "../context/CustomerContext";


// const customers = [
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
//     { id: 2, name: 'John Smith', email: 'john.smith@example.com' },
//     { id: 3, name: 'King Kochhar', email: 'king.kochhar@example.com' }
// ]

const Customers = () => {
    const { customers } = useCustomerContext();
    return (
        <>
            <div className="container mt-5">
                <Link to={'/add-customer'} className="btn btn-sm btn-secondary">Add New Customer</Link>
                <hr />
                <h2>Customers List</h2>
                <ul className="list-group">
                    {customers.map((customer) => (
                        <li key={customer.id} className="lit-group-item">
                            <Link to={`/customer-detail/${customer.id}`}>{customer.id}</Link> - {customer.name} - {customer.email}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default Customers;