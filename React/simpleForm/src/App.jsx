import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const previousName = useRef("");

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  // function focus() {
  //   inputRef.current.focus();
  //   inputRef.current.value = "Kwaku Adu";
  // }
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {previousName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
