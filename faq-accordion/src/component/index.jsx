import { useState } from "react";
import FaqData from "./index.js";

export default function Index() {
  const[ActiveId,SetActiveId]=useState(null);
  function HandleClick(id){
    SetActiveId(ActiveId===id?null:id);
  }
  function HandelAll(){
    SetActiveId(ActiveId === "All" ?null:"All");
  }
  return(
    <>
    <div className="bg-[#7B3F00]  flex flex-col items-center m-[40px] rounded-[30px] lg:justify-center lg:mx-[200px]">
      <button onClick={HandelAll} className="bg-white py-[20px] my-[20px] w-[200px] rounded-[40px]">Show All Answers</button>
      {FaqData.map((faq)=>(
        <div key={faq.id}  className="w-full mb-3">
          <div className="hover:scale-103 hover:shadow-lg 
                   transition-all duration-300 flex flex-row w-[95%] lg:w-[94%] lg:ml-[20px] border py-[20px]  text-left bg-white rounded-lg px-[10px] mx-[10px]">
              <button className="w-[360px] text-left  "
              onClick={()=>HandleClick(faq.id)}>{faq.question}
              </button>
          <span className=" ml-[100px] lg:ml-[650px]">▼</span>
          </div>
        
          {(faq.id === ActiveId || ActiveId === "All") && (
  <p className="animate-[slideIn_0.3s_ease-out] p-4">
    {faq.answer}
  </p>
)}
        </div>
      ))}
    </div>
    
    </>
  )
} 