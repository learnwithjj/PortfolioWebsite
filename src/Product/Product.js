import "./product.css";
const Product=({img1,img2,link}) =>
{
    function navigate()
    {
        window.location.href=link;
    }
    return(
    <div class="p">
        <img src={img1} alt="" className="photodim shadowprop " id="p-img1" onClick={navigate}/>
        <img src={img2} alt="" className="photodim shadowprop" id="p-img2" onClick={navigate}/>
    </div>
    );
}
export default Product;