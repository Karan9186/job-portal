import React from "react";
import HeroSec from "../HeroSec";
import Search from "../Search";
import LatestOpening from "../LatestOpening";

function Home() {
  return (
    <>
      <div className="min-h-screen">
        <HeroSec />
        <Search />
        <LatestOpening />
      </div>
    </>
  );
}

export default Home;
