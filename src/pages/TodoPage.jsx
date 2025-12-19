import { useState } from "react";

export default function TodoPage() {
    const [newItem, setInput] = useState(""); //new item is the new element in the list
    const [listItem, setItems] = useState([]); //listitems is the array of items
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
                <h1>Welcome to <strong>ToDo<span className="text-amber-600 w-fit">Hub</span></strong></h1>
                <section>
                    <input
                        value={newItem}
                        onChange={(e) => setInput(e.target.value)} // this is the way to get the value
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
                    {
                        listItem.map((value,index) =>{
                            return <li key={index}>{value}</li>
                        })
                    }
                    </ol>
                </section>
            </main>
        </>
    );
}
