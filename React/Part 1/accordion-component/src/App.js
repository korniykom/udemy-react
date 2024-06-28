import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,

    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,

    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Accordion() {
  const [isOpenId, setIsOpenId] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, indx) => {
        return (
          <AccordionItem
            title={faq.title}
            id={indx}
            key={indx}
            text={faq.text}
            isOpenId={isOpenId}
            onSetOpenId={setIsOpenId}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({ title, text, id, isOpenId, onSetOpenId }) {
  const isOpen = isOpenId === id;
  return (
    <div
      className={` item ${isOpen ? "open" : ""}`}
      onClick={() => {
        onSetOpenId(id);
      }}
    >
      <div className="number">0{id + 1}</div>
      <div className="title">{title}</div>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <div className="content-box ">{text}</div>}
    </div>
  );
}
