import { useState,useEffect } from "react";
import axios from "axios";

export default function Login(){
     const[form,setform] = useState({
        email:'',
        password:'',
     })
     const  handleChange=(e)=>{
        const{id,value} = e.target
        setform({...form,[id]:value})
     }
     const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
        const response=  await axios.post("http://localhost:3001/login",form);
        if (response.status === 200) {
        console.log("login successful")
        }
        console.log(response.data);
        }
        catch(error){
            console.log(error.message)
        }
     }

     return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" id="email" value={form.email} onChange={handleChange} placeholder="enter your email">
            </input> 
            <input type="password"  id="password" value={form.password} onChange={handleChange} placeholder="enter your password">
            </input>
            <button type="submit">login</button>
            </form>
        </div>
     )

}