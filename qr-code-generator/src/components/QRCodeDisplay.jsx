import { QRCodeSVG } from "qrcode.react";



export default function QRCodeDisplay({ value }) {

function downloadQR() {
    const qrCode = document.getElementById("qr-code");

    if (!qrCode) {
        return;
    }

    const svgData = new XMLSerializer().serializeToString(qrCode);
    const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8"
    });

    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = function () {
        const canvas = document.createElement("canvas");

        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
            URL.revokeObjectURL(url);
            return;
        }

        ctx.drawImage(img, 0, 0);

        const pngUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = "qr-code.png";

        link.click();

        URL.revokeObjectURL(url);
    };

    img.onerror = function () {
        URL.revokeObjectURL(url);
        console.error("Could not load the QR code image.");
    };

    img.src = url;
}
    return (
        
        <>
      <div className="border-2 border-gray-500 rounded-2xl p-5 my-[20px] mx-[70px]">

    <div className="border-2 border-gray-300 rounded-xl p-4">
     <div  className="mx-[45px]">
          <QRCodeSVG id="qr-code" value={value} size={180} />  
     </div>
    </div>

</div>
<button className="w-[90%] mx-[25px] my-[10px] bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition duration-200"
 onClick={downloadQR}>
    Download QR Code
</button>
        </>
    );
}

