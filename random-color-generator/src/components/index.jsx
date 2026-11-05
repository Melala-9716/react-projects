
import { useState } from 'react';

export default function ColorGenerator() {
    const [color, SetColor] = useState("#FFFFFF");
   const [colorType, setColorType]=useState("");
   function GenerateRandomNumberRGB(){
    const random=Math.floor(Math.random()*256);
    return random;
   }
   function  GenerateRGBCOLOR(){
    const red=GenerateRandomNumberRGB();
    const green=GenerateRandomNumberRGB();
    const blue=GenerateRandomNumberRGB();

    return `rgb(${red},${green},${blue})`;
   }
   function ChangeRGB(){
     SetColor(GenerateRGBCOLOR());
     setColorType("RGB");
   }
   function GenerateRandomNumberHEX(){
    const randomNumber=Math.floor(Math.random()*16777216);
    return `#${randomNumber.toString(16).padStart(6, "0")}`;
   }
   function ChangeHEX(){
       SetColor(GenerateRandomNumberHEX());
       setColorType("HEX");
   }
   function random(){

     const randomType=Math.random()<0.5?"RGB":"HEX";

     if(randomType==="RGB"){
        SetColor(GenerateRGBCOLOR());
     }
     else{
        SetColor(GenerateRandomNumberHEX());
     }
     setColorType(randomType);
   }
    return (
        <div>
            <h1 className='text-[40px] text-[italic] text-center font-bold text-black'>Random Color Generator</h1>

            <div className='flex justify-center flex-row gap-[20px] text-[25px] my-[10px]'>
                <button className='border-[3px] border-pink-950 p-[5px] rounded-2xl' onClick={ChangeRGB}>RGB Color</button>
                <button className='border-[3px] border-pink-950 p-[5px] rounded-2xl' onClick={ChangeHEX}>Hex Color</button>
                <button className='border-[3px] border-pink-950 p-[5px] rounded-2xl' onClick={random}>Random Color</button>
            </div>

            <div
                style={{
                    backgroundColor: color,
                    border: "2px solid black",
                    minHeight: "100vh",
                    margin:"20px",
                    borderRadius:"10px"

                }}
                className='flex justify-center '
            >
                <p className="text-[50px] font-bold flex justify-center items-center ">{color}</p>
            </div>
        </div>
    );
}
