import { useEffect, useState } from "react";
import RequestCatFactService from "./RequestCatFactService";

export default function App() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    RequestCatFactService().then((res) => {
      setFact(res);
    });
  }, []);

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <p>{fact}</p>
    </div>
  );
}
