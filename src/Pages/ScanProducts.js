import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import { useSelector,useDispatch } from 'react-redux';
import { getProductById } from '../Functions/products';
import Nav from "../Nav/HeaderNav";
const ScanProduct = ({ history }) => {
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const [product,SetProduct] = useState({});
    const [quantity,setQuantity] = useState();
    const { user,list } = useSelector((state) => ({ ...state }));
    //   useEffect(()=>{
    //       if(user === null){
    //           history.push("/existing-user");
    //       }
    //   },[user]);
    useEffect(()=>{
        getProductById(scanResultWebCam).then((res)=>{
            console.log(res.data.product);
            SetProduct(res.data.product);
        }).catch(err=>console.log(err));
    },[scanResultWebCam]);
    let dispatch = useDispatch();
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }
    var productsList = [];
    if(list.length != 0){
        productsList.push(...list);
    }
    productsList.push(product);
    const handleAddToList = (e) => {
        e.preventDefault();
        console.log(quantity);
        dispatch({
            type:"ADD_TO_LIST",
            payload:productsList
        });
        setScanResultWebCam('');
        setQuantity();
    }
    return (
        <div className="container">
            <Nav />
            <h3 className="logogs">Scan Products</h3>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-3">
                    <QrReader
                        delay={300}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                    />
                </div>
                <div className="col-md-5"></div>
            </div>
            {scanResultWebCam !== '' ? 
            <div id="myModal" class="modal" style={{ display: 'block' }}>
            <div class="modal-content">
                <div className="card">
                    <div className="card-body">

                        Batch number {product.batchNumber}
                        <br />
                        Model No {product._id}
                        <br />
                        Price {product.sellingPrice}
                        <br />
                        <span>Quantity:- <input type="number" 
                        value={quantity}
                        onChange={e=>setQuantity(e.target.value)}
                        placeholder="Enter Quantity" className="form-control" /></span>
                    </div>
                    <div className="card-footer">
                        <button className="button close-modal" onClick={handleAddToList}>Add to list</button>
                    </div>
                </div>
            </div>
        </div>
         : ""}
            
        </div>
    );
}

export default ScanProduct;