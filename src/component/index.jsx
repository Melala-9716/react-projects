import { useState } from "react";
import FaqData from "./index.js";

export default function Index() {
  const [activeId, setActiveId] = useState(null);

  // Open or close one FAQ
  function handleClick(id) {
    setActiveId(activeId === id ? null : id);
  }

  // Open or close all FAQs
  function handleAll() {
    setActiveId(activeId === "All" ? null : "All");
  }

  return (
    <div>
      <button onClick={handleAll}>
        Show All Answers
      </button>

      {FaqData.map((faq) => (
        <div key={faq.id}>
          <button onClick={() => handleClick(faq.id)}>
            {faq.question}
          </button>

          {(activeId === faq.id || activeId === "All") && (
            <p>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}