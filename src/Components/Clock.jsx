import React  from "react";
export default function Clock() {
    //style useState
    const [style,setStyle]=React.useState({});

    //date
    const newDate=new Date();
    
    
    const [date, setDate] = React.useState(newDate);
   
    setTimeout(() => {
        setDate(new Date());
    },1000);

//    morning 
   
  const morning= new Date();
   morning.setDate(date.getDay()-1) ;morning.setHours(23);morning.setMinutes(59);morning.setSeconds(59);
   //afternoon
   const afterNoon=new Date();
   afterNoon.setHours(11);afterNoon.setMinutes(59);afterNoon.setSeconds(59);
   
   //evening 
   const evening =new Date();
   evening.setHours(16);evening.setMinutes(59);evening.setSeconds(59);

   const isMorning=date>morning&&date<afterNoon;
   const isAfterNoon=date>afterNoon&&date<evening;
   const isEvening=date>evening&&date<morning;
  // useEffect 
   React.useEffect(()=>{
    if(isMorning){
        setStyle({backgroundImage:"url(/images/morning.jpg)"});
    }
    else if(isAfterNoon){
        setStyle({backgroundImage:"url(/images/afternoon.jpg)"});
    }else{
        setStyle({backgroundImage:"url(/images/evening.jpg)"});
    }
   },[isMorning,isAfterNoon,isEvening])
    
 
  
  
    
    return (
        <div style={style} className="clock-background">
            <h1 className="time">{date.toLocaleTimeString()}</h1>
        </div>
    )

}