import { useState } from "react";

const listComponents = [
  {
    name: "James",
  },
  {
    name: "Peter",
  },
  {
    name: "Elizabeth",
  },
];

function App() {
  const [updateName, setUpdateName] = useState("Hello Coding");
  const [counterValue, setCounterValue] = useState(0);

  const [enteredName, setEnteredName] = useState();

  const onIncreasePressed = () => {
    if (counterValue >= 10) {
      alert("Great Shot!");
      return counterValue;
    } else {
      setCounterValue(counterValue + 1);
    }
  };

  const onDecreasePressed = () => {
    if (counterValue <= 0) {
      return counterValue;
    } else {
      setCounterValue(counterValue - 1);
    }
  };

  const MyForm = () => {
    return (
      <form>
        <label>
          Enter Your Name:
          <input
            type="text"
            value={enteredName}
            onChange={(name) => setEnteredName(name.target.value)}
          />
        </label>
      </form>
    );
  };

  return (
    <div>
      <h1 onClick={() => setUpdateName("Hello coding 2")}>Update Name</h1>
      <p>{updateName}</p>

      {listComponents.map((item, index) => (
        <li
          key={item.name}
          onClick={() => console.log("Name: ", item.name, "Index: ", index)}
        >
          {item.name}
        </li>
      ))}
      <div style={{ flexDirection: "row" }}>
        <p
          onClick={onIncreasePressed}
          style={{
            fontSize: 20,
            backgroundColor: "red",
            width: "20%",
            textAlign: "center",
            borderRadius: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Increase Value
        </p>
        <h2 style={{ textAlign: "center", width: "20%" }}>{counterValue}</h2>
        <p
          onClick={onDecreasePressed}
          style={{
            fontSize: 20,
            backgroundColor: "red",
            width: "20%",
            textAlign: "center",
            borderRadius: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Decrease Value
        </p>
      </div>
      <div>
        <MyForm />
      </div>
      <div>Your name is: {enteredName}</div>
    </div>
  );
}

export default App;
