import { useState } from 'react';
import Evening from '../assets/evening images.jpeg';
import Middle from '../assets/l.jpeg';
import Morning from '../assets/Morning image.jpeg';
import Night from '../assets/night image.png';

function Index(){
    const [image,setimage]=useState(0);
    const images = [
    {
        image: Morning,
        title: "Morning",
        description: "Beautiful morning view"
    },
    {
        image: Middle,
        title: "Lunch",
        description: "A peaceful Lunch"
    },
    {
        image: Evening,
        title: "Evening view",
        description: "A Beautiful Evening View"
    },
    {
        image: Night,
        title: "Night view",
        description: "A Beautiful Night View"
    }
];
function back(){
    if(image>0){
        setimage(image-1)
    }
    else{
        setimage(images.length-1)
    }
}

function front(){
    if(image>=images.length-1){
        setimage(0);
    }
    else{
        setimage(image+1)
    }
}
    return(
        <>
    <h1 className='italic text-center py-[20px] text-[40px]'>Image Slider</h1>

    <div className="flex justify-center lg:gap-[20px] ">
        <button
            className="text-[50px] text-red-700 pr-[10px] cursor-pointer lg:text-[80px]"
            onClick={back}
        >
            ❮
        </button>

        <img
            className='border border-red-700 border-[5px] w-[400px] h-[400px] lg:w-[800px] lg:h-[500px] rounded-[30px]'
            src={images[image].image}
            alt={images[image].title}
        />

        <button
            className="lg:text-[80px] text-[50px] text-red-700 pr-[10px] cursor-pointer"
            onClick={front}
        >
            ❯
        </button>
    </div>
</>
    )
};

export default Index;