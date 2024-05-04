import { useState } from "react";
import AccordionItem from "../accordionItem/AccordionItem";

const accordionList = [
  {
    title: "What is JavaScript?",
    text: "JavaScript is a high-level, interpreted programming language that is widely used for creating interactive and dynamic web content. It can also be used for server-side development using Node.js.",
  },
  {
    title: "What are the key features of Python?",
    text: "Python is known for its simplicity, readability, and versatility. It supports multiple programming paradigms, has a large standard library, and is widely used in areas such as web development, data science, artificial intelligence, and automation.",
  },
  {
    title: "Explain the concept of responsive web design.",
    text: "Responsive web design is an approach to designing websites that ensures optimal viewing and interaction experiences across a wide range of devices and screen sizes. It involves using flexible grids and layouts, responsive images, and CSS media queries.",
  },
  {
    title: "What are the benefits of using version control systems?",
    text: "Version control systems like Git help developers track changes to their codebase, collaborate effectively with others, revert to previous versions if needed, and maintain a history of modifications. They also facilitate branching and merging workflows.",
  },
];

const AccordionList = () => {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div>
      {accordionList.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          num={index}
          currOpen={currOpen}
          onCurrOpen={setCurrOpen}
        />
      ))}
    </div>
  );
};

export default AccordionList;
