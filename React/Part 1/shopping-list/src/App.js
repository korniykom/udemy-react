import { useState } from "react";

export default function App() {
  const [shoppingListInput, setShoppingListInput] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  function handleShoppingListInput(e) {
    const input = e.target.value;
    setShoppingListInput(input);
  }
  function handleSubmitInput(e) {
    e.preventDefault();
    setShoppingList((list) => [...list, shoppingListInput]);
    setShoppingListInput("");
    console.log(shoppingList);
    setItemCount(itemCount + 1);
  }

  return (
    <div>
      <form onSubmit={handleSubmitInput}>
        <p>Add Shopping Item</p>
        <input
          type="text"
          value={shoppingListInput}
          onChange={handleShoppingListInput}
        />
      </form>
      <ul>
        {shoppingList.map((item, indx) => (
          <ShoppingListItem key={indx} item={item} />
        ))}
      </ul>
      <p>Items in list {itemCount}</p>
    </div>
  );
}

function ShoppingListItem({ item, onDeleteItem }) {
  return (
    <>
      <li>{item}</li>
    </>
  );
}
