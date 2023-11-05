import React, { useEffect } from "react";
export default function Clock() {
    //style useState
    const [style,setStyle]=React.useState({});
    //date
    const newDate=new Date();
    const [date, setDate] = React.useState(newDate);
   
    // setTimeout(() => {
    //     setDate(new Date());
    // },1000);
   const afterNoon=new Date();
   afterNoon.setHours(11);afterNoon.setMinutes(59);afterNoon.setSeconds(59);
   
   
   const morning= new Date();
   morning.setDate(date.getDay()-1) ;morning.setHours(23);morning.setMinutes(59);morning.setSeconds(59);
  
   const evening =new Date();
   evening.setHours(16);evening.setMinutes(59);evening.setSeconds(59);
   useEffect(()=>{
    if(date>morning&&date<afterNoon){
        setStyle({background:"url(/images/morning.jpg)"});
    }
    else if(date>afterNoon&&date<evening){
        setStyle({background:"url(/images/afternoon.jpg)"});
    }else{
        setStyle({background:"url(/images/evening.jpg)"});
    }
   },)
    
 
  
  
    
    return (
        <div style={style}>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )

}