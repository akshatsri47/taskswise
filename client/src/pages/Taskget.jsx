import axios from "axios";
import { useEffect,useState } from "react";

export default function Taskget(){
    const[task,settask] = useState();

    useEffect=async()=>{
        const response = await axios.get("https://taskswise-2.onrender.com/app/tasks/")
    }

}