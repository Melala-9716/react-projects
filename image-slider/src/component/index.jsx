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
         <div className="text-center py-[15px]">
    <h2 className="text-[30px] font-bold">
        {images[image].title}
    </h2>
    <p className="text-[18px] italic">
        {images[image].description}
    </p>
</div>
    )
};

export default Index;