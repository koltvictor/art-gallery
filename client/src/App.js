import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import ArtList from "./components/ArtList";
import Search from "./components/Search";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [searchArt, setSearchArt] = useState('')
  const [arts, setArts] = useState([]);
  

  useEffect(() => {
    fetch("api/arts")
      .then((r) => r.json())
      .then(setArts);
  }, []);

  console.log(arts)

  console.log(arts.map((art) => art.title))

  function handleSearch(e) {
    setSearchArt(e.target.value);
  }

  // const displayedArts = arts.filter(art => {
  //   return art.artist.toLowerCase().includes(searchArt.toLowerCase()) ||
  //   art.title.toLowerCase().includes(searchArt.toLowerCase())
  // })

  return (
    <div>
      <div className="headerWrapper">
        <Header />
      </div>
        <Switch>
          <Route exact path="/arts">
            <br/>
            <Search 
              searchArt={searchArt}
              handleSearch={handleSearch}
            />
            <ArtList
              arts={arts}
            />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
    </div>
  )
}

export default App;