import { useState } from "react";

export default function TodoPage() {
    const [newItem, setInput] = useState("");
    const [listItem, setItems] = useState([]);
    function addItems() {
        if (newItem.trim() != "") {
            listItem.push(newItem);
            setItems([...listItem]);
            setInput("")
        }
    }
    return (
        <>
            <main>
                <h1>Welcome to ToDo</h1>
                <section>
                    <input
                        value={newItem}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                    />
                    <button
                        onClick={() => {
                            addItems();
                        }}
                    >
                        Add
                    </button>
                </section>
                <section>
                    <ol>
                        <li>Input :{listItem}</li>
                    </ol>
                </section>
            </main>
        </>
    );
}
