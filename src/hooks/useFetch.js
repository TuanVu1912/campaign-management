import axios from "axios";
import { useEffect, useState } from "react";
 
const useFetch = (url,values) => {
  const [data, setdata] = useState(null);
  const [error, seterror] = useState("");
  const fetchData = async(url,values)=>
  {
    try{
    const res= await axios.post(url,values)
    setdata(res);
    }
    catch(error)
    {
        seterror(error);
    }
  }
 
  useEffect(() => {
    fetchData(url,values)
  }, [url,values]);
 
  return { data, error,fetchData};
};
 
export default useFetch;