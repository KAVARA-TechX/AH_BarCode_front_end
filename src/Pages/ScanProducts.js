import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import { useSelector } from 'react-redux';
import Nav from "../Nav/HeaderNav";
const ScanProduct = ({ history }) => {
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const { user } = useSelector((state) => ({ ...state }));
    //   useEffect(()=>{
    //       if(user === null){
    //           history.push("/existing-user");
    //       }
    //   },[user]);
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }
    const handleAddToList = (e) => {
        e.preventDefault();
        setScanResultWebCam('');
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

                        Brand
                        <br />
                        Model No
                        <br />
                        Price
                        <br />
                        <span>Quantity:- <input type="number" placeholder="Enter Quantity" className="form-control" /></span>
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