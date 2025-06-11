import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import BackgroundCircles from "./components/BackgroundCircles/BackgroundCircles";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <BackgroundCircles />
      <Header />
      <main>
        <Hero />
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
