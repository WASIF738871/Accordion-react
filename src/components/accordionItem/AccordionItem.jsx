const AccordionItem = ({ item, num, currOpen, onCurrOpen }) => {
  let isOpen = currOpen == num;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={(e) => (isOpen ? onCurrOpen(null) : onCurrOpen(num))}
    >
      <p> {num < 9 ? `0${num + 1}` : num + 1}</p>
      <p>{item.title}</p>
      <p>{isOpen ? "-" : "+"}</p>
      {isOpen && <div>{item.text}</div>}
    </div>
  );
};

export default AccordionItem;
