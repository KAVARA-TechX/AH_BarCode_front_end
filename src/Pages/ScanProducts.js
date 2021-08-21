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
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-3">
                    <h3>Qr Code Scan by Web Cam</h3>
                    <QrReader
                    delay={300}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                    />
                    <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>
    );
}

export default ScanProduct;