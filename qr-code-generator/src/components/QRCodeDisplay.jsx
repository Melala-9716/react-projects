import { QRCodeSVG } from "qrcode.react";


export default function QRCodeDisplay({ value }) {
    return (
        <>
      <div className="border-2 border-gray-500 rounded-2xl p-5 my-[20px] mx-[70px]">

    <div className="border-2 border-gray-300 rounded-xl p-4">
     <div  className="mx-[45px]">
          <QRCodeSVG value={value} size={180} />  
     </div>
    </div>

</div>
        </>
    );
}

