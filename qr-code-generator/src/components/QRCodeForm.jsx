import QRCodeDisplay from "./QRCodeDisplay";
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

<input
    value={enter}
    placeholder="Enter text or URL"
    onChange={(event) => Change(event)}
></input>

<button onClick={subbmite}>Submit</button>

<QRCodeDisplay value={Submitted}></QRCodeDisplay>

        </>
    );
}
