import { useEffect,useState } from "react";

const useFetch = (url) => {

    const [data,setdata]=useState(null);
const [pending,setpending]=useState(true);
const [errors,seterror]=useState(null);





useEffect(()=>{



    // const abortconst=new AbortController();

    setTimeout(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok)
            {   console.log(res);
                throw Error('could not reach the resource')
            }
            return res.json();
        })
        .then(data=>{
         
            setdata(data);
            setpending(false);
            seterror(null);
            
        })
        .catch(err=>{
            
                setpending(false);
                seterror(err.message);

            
          
           
        })
    },200
   )
    
  
   },[url]);


   return {data,pending,errors};
 
    
}
export default useFetch;