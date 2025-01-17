import { useLocation } from "react-router-dom"
import { Product } from "../types/product";

export default function SingleProduct() {
    const location = useLocation();
    const product = (location.state as {product: Product})?.product;
    return <div>
        <p>{product.title}</p>
        </div>
}