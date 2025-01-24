import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-8">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
