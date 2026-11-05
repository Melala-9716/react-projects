
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
 
    return (
        <div>
            <h1>Random Color Generator</h1>

            <div>
                <button onClick={ChangeRGB}>RGB Color</button>
                <button onClick={ChangeHEX}>Hex Color</button>
            </div>

            <div
                style={{
                    backgroundColor: color,
                    border: "2px solid black",
                    padding: "50px",
                    minHeight: "100vh"
                }}
            >
                <p className="text-8xl font-bold flex justify-center items-center ">{color}</p>
            </div>
        </div>
    );
}
