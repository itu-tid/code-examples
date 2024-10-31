import { useEffect, useState } from "react";
import Parse from "parse";

export default function Counter({ id, name, color, size }) {
  const [clicks, setClicks] = useState(undefined);

  async function loadCounterFromParse() {
    const parseQuery = new Parse.Query("Counter");
    let counter = await parseQuery.get(id);
    setClicks(counter.get("count"));
  }

  useEffect(() => {
    try {
      loadCounterFromParse();
    } catch (e) {
      setClicks(0);
    }
  }, []);

  useEffect(() => {
    if (clicks !== undefined) {
      localStorage.setItem(name, JSON.stringify(clicks));
    }
  }, [clicks]);

  async function saveCounterToParse() {
    let counter = new Parse.Object("Counter");
    counter.set("objectId", id);
    counter.set("count", clicks + 1);

    counter = await counter.save();
    setClicks(counter.get("count"));
  }

  function handleIncreaseClick() {
    saveCounterToParse();
  }

  function handleDeleteClick() {
    //  todo...
    //   https://www.back4app.com/docs/react/data-objects/react-crud-tutorial#-lX0y
  }

  return (
    <div style={{ backgroundColor: color }}>
      <p>
        {name} <span style={{ fontSize: size }}>{clicks}</span>
      </p>

      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}
