import { QRCodeSVG } from "qrcode.react";


export default function QRCodeDisplay({ value }) {
    return (
        <>
            <QRCodeSVG value={value} />
        </>
    );
}

