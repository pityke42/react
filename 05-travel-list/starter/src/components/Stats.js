export default function Stats({ items }) {
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
