import { useState } from "react";
import One from "./Components/One";
import Two from "./Components/Two";
import Three from "./Components/Three";

function ContentsContainer({ listName }) {
  if (listName === "one") {
    return <One />;
  } else if (listName === "two") {
    return <Two />;
  } else if (listName === "three") {
    return <Three />;
  }
  return null;
}
function App() {
  const [listName, setListName] = useState("detil");
  const handeleCheckId = (e) => {
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            id="one"
            style={listName === "one" ? { color: "red" } : { color: "black" }}
            onClick={handeleCheckId}
          >
            One
          </li>
          <li
            id="two"
            style={listName === "two" ? { color: "red" } : { color: "black" }}
            onClick={handeleCheckId}
          >
            Two
          </li>
          <li
            id="three"
            style={listName === "three" ? { color: "red" } : { color: "black" }}
            onClick={handeleCheckId}
          >
            Three
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}
export default App;
