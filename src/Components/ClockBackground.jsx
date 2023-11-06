import React from "react";
import Clock from "./Clock";

export default function ClockBackground() {
    const [style, setStyle] = React.useState({});
    let date=new Date();
   const setDate=()=>{
    date=new Date();
   }
   setTimeout(()=>{
    setDate();
    console.log(date);
   },1000);
    const afterNoon = new Date();
    afterNoon.setHours(11); afterNoon.setMinutes(59); afterNoon.setSeconds(59);
    
    const morning = new Date();
    morning.setDate(date.getDay() - 1); morning.setHours(23); morning.setMinutes(59); morning.setSeconds(59);

    const evening = new Date();
    evening.setHours(16); evening.setMinutes(59); evening.setSeconds(59);
    // console.log(date);
    // if (date > morning && date < afterNoon) {
    //     setStyle({ background: "url(/images/morning.jpg)" });
    // }
    // else if (date > afterNoon && date < evening) {
    //     setStyle({ background: "url(/images/afternoon.jpg)" });
    // } else {
    //     setStyle({ background: "url(/images/evening.jpg)" });
    // }
    return (
        <div>
            <div style={style}>
                
            </div>

        </div>
    )
}