import React, {useState} from 'react';
import B2bUser from '../Forms/B2bUser';
import RetailUser from '../Forms/RetailUser';

const NewUser = () =>{
    
   

    const [select,setSelect] = useState("");
    
    return(
        <div>
            <h3 className="text-center">Register New User</h3>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <label>User Type</label>
                        <select className="form-control" aria-label="Default select example"
                        onChange={(e)=>{
                            setSelect(e.target.value);
                        }}
                        >
                                <option >Choose the User Type</option>
                                <option value="B2B">B2B User</option>
                                <option value="Retail">Retail User</option>
                            </select>
                            {select === "B2B" ? 
                            <B2bUser/>
                            :
                            select === "Retail"? 
                            <RetailUser/>
                            :
                            ""
                            }
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewUser;