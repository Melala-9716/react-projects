
import { useState } from 'react';

export default function ColorGenerator() {
    const [color, SetColor] = useState("#FFFFFF");

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
   }
    return (
        <div>
            <h1>Random Color Generator</h1>

            <div>
                <button onClick={ChangeRGB}>RGB Color</button>
                
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
