import React,{useState} from 'react';
import QrReader from 'react-qr-reader';

const ScanProduct = () =>{
  const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleErrorWebCam = (error) => {
        console.log(error);
      }
      const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
       }
       const handleAddToList = (e) =>{
           e.preventDefault();
           setScanResultWebCam('');
       }
    return(
        <div className="container">
            <h3>Scan Products <button className="btn btn-primary float-right">Confirm</button></h3>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-3">
                    <QrReader
                    delay={300}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                    />
                    <h3>{scanResultWebCam}</h3>
                </div>
                <div className="col-md-5"></div>
            </div>
            {scanResultWebCam !== '' ? <div className="mt-5">
                <div className="card">
                    <div className="card-header">
                        Model Number:-
                    </div>
                    <div className="card-body">
                        Price:-
                        <br/>
                        Brand:-
                        <br/>
                        <span>quantity:- <input type ="number" className="form-control"/></span>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" onClick={handleAddToList}>Add to list</button>
                    </div>
                </div>
            </div> : ""}
        </div>
    );
}

export default ScanProduct;