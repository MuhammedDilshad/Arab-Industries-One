import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import MainContent from "../../components/MainContent/MainContent";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default Home;
