import "./productList.css";
import Product from "../Product/Product"
import {products} from "../Product/data";
function ProductList()
{
    return(
        <div >
            <div className="leftalign" >
            {products.map((item) =>
            (
                <Product key={item.id} img1={item.img1} img2={item.img2} link={item.link} />
            ))}
            </div>
            <div  className="rightalign ">
               <div style={{fontSize:"80px",fontWeight:"200px",letterSpacing:"8px",lineHeight:"35px",color:"wheat",textShadow:"20px 20px 8px rgba(0, 0, 0, 1)",marginTop:"20px"}}> APPS</div>
               <div style={{fontSize:"40px",fontWeight:"150px",letterSpacing:"4px",lineHeight:"35px",color:"wheat",textShadow:"20px 20px 8px rgba(0, 0, 0, 1)",marginTop:"40px"}}>Whether it's a company, a restaurant, an interior design shop or your own portfolio or blog, I have the right solution for you.</div>
                 </div>
        </div>
    );
}
export default ProductList;