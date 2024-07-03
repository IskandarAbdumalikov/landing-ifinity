import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Explore from "./components/explore/Explore";
import FindJob from "./components/findJob/FindJob";
import Inbox from "./components/inbox/Inbox";
import News from "./components/news/News";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Explore />
        <FindJob/>
        <Inbox/>
        <News/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
