import "./productList.css";
import Product from "../Product/Product"
import {products} from "../Product/data";
function ProductList()
{
    return(
        <div className="pl-list">
            
            {products.map((item) =>
            (
                <Product key={item.id} img1={item.img1} img2={item.img2} link={item.link} />
            ))}
        </div>
    );
}
export default ProductList;