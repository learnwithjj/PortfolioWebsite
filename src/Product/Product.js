import "./product.css";
const Product=({img1,img2}) =>
{
    return(
    <div class="p">
        <img src={img1} alt="" className="pic" id="p-img1"/>
        <img src={img2} alt="" className="pic" id="p-img2"/>
    </div>
    );
}
export default Product;