import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away👜</h1>;
}
function Form({ onAddItems }) {
  const [description, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    onAddItems(newItem);

    setDiscription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}>
        {Array.from({ length: 20 }, (currentValue, index) => index + 1).map(
          (element) => (
            <option value={element} key={element}>
              {element}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => {
          //If we type in the input field the change event fired off
          //we can react top that event with onChange event handler
          //after passing the function it receives the event
          //on the event the event.target is the entire element
          //element.value is thy input we give in
          setDiscription(event.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span
        style={
          item.packed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed x (x%)</em>
    </footer>
  );
}
