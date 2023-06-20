
import Product from "../Product/Product"
import "./photolist.css";
import {products} from "../Product/data";
function PhotoList()
{
    return(
        <div className="grid-wrapper ">
        <div>
          <img className="normal"
            src={require('./images/PXL_20230218_131906824.jpg')}
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src={require('./images/PXL_20230501_104032867.jpg')}
            alt=""
          />
        </div>
        <div className="tall">
          <img
            src={require('./images/DSC_0074.JPG')}
            alt=""
          />
        </div>
        <div className="wide">
          <img
            src={require('./images/DSC_0818.JPG')}
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src={require('./images/DSC_0938-01.jpeg')}
            alt=""
          />
        </div>
        <div className="tall">
          <img
            src={require('./images/PXL_20230430_135401235.jpg')}
            alt=""
          />
        </div>
        <div className="big">
          <img
            src={require('./images/PXL_20230430_133435489.jpg')}
            alt=""
          />
        </div>
        <div className="normal">
          <img
            src={require('./images/DSC_0048.JPG')}
            alt=""
          />
        </div>
        <div className="wide">
          <img
            src={require('./images/DSC_0916.JPG')}
            alt=""
          />
        </div>
        <div className="big">
          <img
            src={require('./images/DSC_0014.JPG')}
            alt=""
          />
        </div>
        <div className="tall">
          <img
            src={require('./images/DSC_0106.JPG')}
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src={require('./images/DSC_0479.JPG')}
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src={require('./images/IMG_0324.jpg')}
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src={require('./images/DSC_0083.JPG')}
            alt=""
          />
        </div>
        {/* <div>
          <img className="normal"
            src={require('./images/DSC_0461.JPG')}
            alt=""
          />
        </div> */}
        {/* <div className="wide">
          <img
            src=""
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            alt=""
          />
        </div>
        <div className="wide">
          <img
            src="https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div className="wide">
          <img className="normal"
            src="https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div className="big">
          <img className="normal"
            src="https://images.unsplash.com/photo-1527928159272-7d012024eb74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src="https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src="https://images.unsplash.com/photo-1433446787703-42d5bf446876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt=""
          />
        </div>
        <div className="big">
          <img
            src="https://images.unsplash.com/photo-1541187714594-731deadcd16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>
        <div className="tall">
          <img className="normal"
            src={require('./images/PXL_20230317_025352126.jpg')}
            alt=""
          />
        </div>
        <div>
          <img className="normal"
            src="https://images.unsplash.com/photo-1421930866250-aa0594cea05c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            alt=""
          />
        </div> */}
        </div>
    );
}
export default PhotoList;