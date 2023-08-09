import { useState, useEffect } from "react";
import {
  Navbar,
  Header,
  Content,
  Projects,
  Footer,
  Loading,
} from "./components";
import { SkullScene } from "../src/components/canvas";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <div>
      <div className="noise"></div>
      <SkullScene />
      <Navbar />
      <Header />
      <Content />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
