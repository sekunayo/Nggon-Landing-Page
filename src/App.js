import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading/Loading";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage/ErrorPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={` ${loading ? "loading-app" : "app"}`}>
      <Switch>
        <Route
          exact
          path="/"
          children={loading ? <Loading /> : <Home />}
        ></Route>
        <Route exact path="*" children={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
