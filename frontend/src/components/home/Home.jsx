import React from "react";
import HeroSec from "../HeroSec";
import Search from "../Search";

function Home() {
  return (
    <>
      <div className="min-h-screen">
        <HeroSec />
        <Search />
      </div>
    </>
  );
}

export default Home;
