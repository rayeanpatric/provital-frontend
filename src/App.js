import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <main className="main">
        <Header />
        <Hero />
        <Body />
        <Footer />
      </main>
    </div>
  );
}

export default App;
