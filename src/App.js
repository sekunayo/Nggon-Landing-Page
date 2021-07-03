import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    AOS.init();
    AOS.refresh();
  }, []);
  return <div className="app">{loading ? <p>aaaaaaa</p> : <Home />}</div>;
}

export default App;
