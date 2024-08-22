export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list!</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everything packed! Ready to go! ✈️"
          : `🌴 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%) 🌴`}
      </em>
    </footer>
  );
}
