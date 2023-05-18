import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data));
  }, []);
  return (
    <>
      <h1>Axios Demonstraction</h1>
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
