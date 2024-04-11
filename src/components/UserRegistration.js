import axios from 'axios';
import {useState } from "react";


function UserRegistration() {
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");


    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8085/api/v1/user/save",
        {

        
        username: name,
        address : address,
        mobile : mobile
        
        });
          alert("User Registation Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }


    return (
      <div class="container mt-4" >

        <form>
        <div class="form-group">
            <label >Name</label>
            <input type="text" class="form-control" placeholder="Enter Name"value={name}
            onChange={(event) =>
              {
                setName(event.target.value);      
              }}></input>
        </div>
        <div class="form-group">
            <label >Address</label>
            <input type="text" class="form-control" placeholder="Enter Address"value={address}
             onChange={(event) =>
               {
                setAddress(event.target.value);      
               }}></input>
        </div>
        <div class="form-group">
            <label >Mobile</label>
            <input type="text" class="form-control" placeholder="Enter Mobile"value={mobile}
            onChange={(event) =>
              {
                setMobile(event.target.value);      
              }}></input>
        </div>
        
        
        <button class="btn btn-primary mt-4"  onClick={save}>Register</button>
        </form>
       
      </div>
    );
  }
  
  export default UserRegistration;