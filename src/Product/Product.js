import "./product.css";
const Product=({img}) =>
{
    return(
    <div class="p">
        <img src={img} alt="" className="p-img"/>
    </div>
    );
}
export default Product;