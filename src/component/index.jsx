import FaqData from "./index.js";

export default function Index() {
  return (
    <div>
      {FaqData.map((faq) => (
        <div key={faq.id}>
          <button>
            {faq.question}
          </button>
        </div>
      ))}
    </div>
  );
}