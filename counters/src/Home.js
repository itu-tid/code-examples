import Counter from "./Counter";
import { useEffect, useState } from "react";
import Parse from "parse";

function Home() {
  const [color, setColor] = useState("lightBlue");
  const [counters, setCounters] = useState(null);

  async function getCounters() {
    const parseQuery = new Parse.Query("Counter");
    let counters = await parseQuery.find();
    setCounters(counters);
  }

  useEffect(() => {
    getCounters();
  }, []);

  async function addCounterAsync() {
    const Counter = Parse.Object.extend("Counter");
    const counter = new Counter();

    counter.set("name", "Push Ups");
    counter.set("count", 10);

    try {
      let newObj = await counter.save();
      alert("saved a counter with id: " + newObj.id);
    } catch (error) {
      alert(error.message);
    }
  }

  if (counters === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Hi from React</h1>

      <br />

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          name={counter.get("name")}
          color={color}
          size={"24pt"}
        />
      ))}

      <button
        onClick={() => {
          setColor("yellow");
        }}
        type="submit"
      >
        Change Color
      </button>

      <button onClick={addCounterAsync}>Add Counter</button>
    </div>
  );
}

export default Home;
