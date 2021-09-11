import React,{useEffect} from 'react';  
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {deleteProductById, getProducts} from '../../Functions/products';
import {saveAs} from 'file-saver';
import * as XLSX from "xlsx";
import * as JSZip from "jszip";
import * as JSZipUtils from "jszip-utils";
import { toast } from 'react-toastify';

const AdminProducts = ({history}) =>{
    const [products,setProducts] = useState([]);
    useEffect(() => {
        if (window.localStorage.getItem("userName") !== "admin") {
            history.push("/admin");
        }
        getProducts().then((res)=>{setProducts(res.data.products)}).catch(err=>console.log(err));
    },);
    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
    const handleLogout = (e) =>{
        e.preventDefault();
        window.localStorage.removeItem("userName");
        history.push("/admin");
    }

    function html_table_to_excel()
    {
  let binaryWS = XLSX.utils.json_to_sheet(products); 
  
  // Create a new Workbook
  var wb = XLSX.utils.book_new() 
  // Name your sheet
  XLSX.utils.book_append_sheet(wb, binaryWS, 'Products') 

  // export your excel
  XLSX.writeFile(wb, 'Products.xlsx');
    }

    const downloadAll = () =>{
//         var zip = new JSZip();
//         var zipFilename = "zipFilename.zip";
//   var count = 0;
        
//         var urls = [];
//         products.map((product)=>{
//             urls.push(product.qrCodeUrl);
//         });
//         console.log(urls);
        
//         urls.forEach(function(url){
//             var filename = "filename";
//             //loading a file and add it in a zip file
//             JSZipUtils.getBinaryContent(url, function (err, data) {
//                if(err) {
//                   throw err; // or handle the error
//                }
//                zip.file(filename, data, {binary:true});
//                count++;
//                if (count == urls.length) {
//                  zip.generateAsync({type:'blob'}).then(function(content) {
//                     saveAs(content, zipFilename);
//                  });
//               }
//             });
//           });


console.log('TEST');
  var zip = new JSZip();
  var count = 0;
  var zipFilename = "Pictures.zip";

  var urls = [];
        products.map((product)=>{
            urls.push(product.qrCodeUrl);
        });
        console.log(urls);

        urls.forEach(function (url, i) {
    var filename = urls[i];
    filename = filename.replace(/[\/\*\|\:\<\>\?\"\\]/gi, '');
    filename = filename.replace('httpsres.cloudinary.comdtxzymub8imageuploadv1631294647','');
    // loading a file and add it in a zip file
        
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if (err) {
        throw err; // or handle the error
      }
      zip.file(filename, data, { binary: true });
      count++;
      if (count == urls.length) {
        zip.generateAsync({ type: 'blob' }).then(function (content) {
          saveAs(content, zipFilename);
        });
      }
    });
  });
    }

    const handleDelete = (id) =>{
        // console.log(id);
        deleteProductById(id).then(res=>{
            // console.log(res);
            toast.success(`Product with id ${id} has been deleted`);
        }).catch(err=>console.log(err));
    }
    return(
        <div className="d-flex" id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">AH International</div>
                <div className="list-group list-group-flush">
                    <Link to="/admin/add-product" className="list-group-item list-group-item-action list-group-item-light p-3" >Add Product</Link>
                    <Link to="/admin/products"    className="list-group-item list-group-item-action list-group-item-light p-3" >Products</Link>
                    <Link to="/admin/orders"      className="list-group-item list-group-item-action list-group-item-light p-3" >Orders</Link>
                    <Link to="/admin/clients"     className="list-group-item list-group-item-action list-group-item-light p-3" >Clients</Link>
                    <Link  className="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleLogout} >Logout</Link>
                </div>
            </div>
            <div id="page-content-wrapper" className="ml-3">
            <i className="fas fa-bars ml-2" id="sidebarToggle" onClick={handleClick}></i>
            <button className="float-right button m-2" id="sidebarToggle" onClick={html_table_to_excel}>Export Excel Sheet</button>
            <br/><br/><br/>
                <h4 className="mt-4 ml-2" style={{display:'inline-block'}}>All Products</h4>        
                <button className="float-right button m-2" id="sidebarToggle" onClick={downloadAll}>Download All</button>
                <div class="container-fluid" style={{marginTop:'18px'}}>
                    <div className="row">
                    {products.map((p)=>(
                        <div key={p._id} className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-header">{p.productName}</div>
                            <div className="card-body d-flex justify-content-center">
                            <img src={p.qrCodeUrl} alt="QR CODE" className="p-1" />
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() =>handleDelete(p._id)}>Delete</button>
                                <button className="btn btn-success float-right" onClick={()=>saveAs(p.qrCodeUrl,p.productId)}>Download</button>
                            </div>
                            </div>
                            </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProducts;