export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  if (numItems < 1)
    return (
      <p className="stats">
        <em>Start adding some items.</em>
      </p>
    );
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go!"
          : `
           You have ${numItems} items on your list, and you already packed 
          ${numPacked} (${percentage}%)
          `}
      </em>
    </footer>
  );
}
