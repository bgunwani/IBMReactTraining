import { Link, useParams } from "react-router-dom";
import { useCustomerContext } from "../context/CustomerContext";

const CustomerDetail = () => {
    const { id } = useParams();  // Get Customer Id from URL
    const { customers } = useCustomerContext();
    const customer = customers.find(c => c.id === Number(id));

    if (!customer) return (<h2 className="container mt-5 text-danger">Customer Not Found.</h2>)

    return (
        <>
            <div className="container mt-5">
                <h2>Customer Detail</h2>
                <p><strong>Id:</strong> {customer.id}</p>
                <p><strong>Name:</strong> {customer.name}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                <Link to='/customers'>Back to Customers</Link>
            </div>
        </>
    )
}

export default CustomerDetail;