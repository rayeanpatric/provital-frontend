import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import SearchSection from "./components/SearchSection/SearchSection";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <main className="main">
        <Header />
        <div className="sticky-search-wrapper">
          <SearchSection />
        </div>
        <Hero />
        <Body />
        <Footer />
      </main>
    </div>
  );
}

export default App;
