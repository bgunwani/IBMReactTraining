import { createContext, ReactNode, useContext, useState } from "react";

interface Customer {
    id: number;
    name: string;
    email: string;
}

// Defining Context Type:
interface CustomerContextType {
    customers: Customer[]
    addCustomer: (customer: Omit<Customer, "id">) => void;
}

// Create Context
const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

// Custom Hook to use Context
export const useCustomerContext = () => {
    const context = useContext(CustomerContext);
    if (!context) {
        throw new Error("useCustomerContext must be used within a Customer Providere.");
    }
    return context;
}

// Provider Component
export const CustomerProvider = ({ children }: { children: ReactNode }) => {
    const [customers, setCustomers] = useState<Customer[]>([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'John Smith', email: 'john.smith@example.com' },
        { id: 3, name: 'King Kochhar', email: 'king.kochhar@example.com' }
    ]);

    // Function to Add Customer
    const addCustomer = (customer: Omit<Customer, "id">) => {
        const newCustomer = {
            id: customers.length + 1,
            ...customer
        };
        setCustomers([...customers, newCustomer]);
    }

    return (
        <CustomerContext.Provider value={{ customers, addCustomer }}>
            {children}
        </CustomerContext.Provider>
    )



}