import QRCodeDisplay from "./QRCodeDisplay";
import { useState } from "react";

export default function QRCodeForm() {
    const [enter, SetEnter] = useState("");
    const [Submitted, SetSubmiited] = useState("");

function subbmite(event) {
    SetSubmiited(enter);
    SetEnter("");
    event.preventDefault();
}

function Change(event) {
    SetEnter(event.target.value);
}

    return (
        <>
<form onSubmit={subbmite}>
    <input
    value={enter}
    placeholder="Enter text or URL"
    onChange={(event) => Change(event)}
></input>

<button onClick={subbmite}>Submit</button>
</form>


<QRCodeDisplay value={Submitted}></QRCodeDisplay>

        </>
    );
}
