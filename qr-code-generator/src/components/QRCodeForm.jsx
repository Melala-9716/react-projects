
import { useState } from "react";

export default function QRCodeForm() {
    const [enter, SetEnter] = useState("");
    const [Submitted, SetSubmiited] = useState("");

function subbmite() {
    SetSubmiited(enter);
    SetEnter("");
}

function Change(event) {
    SetEnter(event.target.value);
}


    return (
        <>
        </>
    );
}
