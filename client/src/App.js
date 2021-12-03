import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ArtList from "./components/ArtList";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("api/arts")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/arts">
            <ArtList
            data={data}
            />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;