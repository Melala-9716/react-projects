import { useState } from 'react';
import Evening from '../assets/evening images.jpeg';
import Middle from '../assets/l.jpeg';
import Morning from '../assets/Morning image.jpeg';
import Night from '../assets/night image.png';

function Index(){
    const [image,setimage]=useState(0);

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