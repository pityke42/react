import { useState } from "react";

export default function Form({ onAddItems }) {
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
