import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import MainContent from "../../components/MainContent/MainContent";
import "./Home.css";
import TopNav from "../../components/TopNav/TopNav";
import RightNav from "../../components/RightNav/RightNav";

function Home() {
  return (
    <div className="MainHome">
      <div className="another">
        <TopNav />
        <div className="Home">
          <Navbar />
          <MainContent />
        </div>
      </div>
      <div className="Ri">
        <RightNav />
      </div>
    </div>
  );
}

export default Home;
