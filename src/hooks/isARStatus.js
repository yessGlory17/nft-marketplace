import {useEffect,useState} from "react";

export const useARStatus = (data) => {
    const [isSupport, SetSupport] = useState(false);
    //const [data,setData] = useState(null);

    const update = (result)=>{
      SetSupport(result);
    }

    useEffect(()=>{

      //setData(props);
      if(data == null) console.log("bos")
      console.log("data : " + data);
      let src =  data.split('.');
      console.log(src);
      if(src[2] == "glb"){
        update(true);
        console.log("aaaaa");
        console.log(isSupport);
      }
      
      
    },[isSupport])

    return isSupport;
}

