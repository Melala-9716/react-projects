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
    <form onSubmit={subbmite} className="w-full max-w-lg mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg space-y-4">

        <label className="block text-sm font-semibold text-gray-700">
            Enter your text or URL
        </label>

        <input
            value={enter}
            placeholder="https://example.com"
            onChange={(event) => Change(event)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
            Generate QR Code
        </button>

    </form>

    <QRCodeDisplay value={Submitted} />
</>

    );
}
