import axios from "axios";
import { Component } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface State {
    products: Product[]
}

class ProductList extends Component<{}, State> {

    state: State = {
        products: []
    }

    componentDidMount(): void {
        this.fetchProducts();
    }

    fetchProducts = async () => {
        const response = await axios.get('http://localhost:5026/api/Product');
        this.setState({ products: response.data });
        console.log(this.state.products);
    }

    render() {
        return (
            <div className="container mt-5">
                <h2>Product List</h2>
            </div>
        )
    }
}

export default ProductList;