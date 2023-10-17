import { useState } from "react";

export default function App() {
  //Lifting up state
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
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

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  //Derived state
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
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
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  //Early conditional rendering
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list🎒</em>
      </p>
    );

  //Derived state
  const numItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go✈️"
          : `    You have ${numItems} items on your list, and you already packed ${numberPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
