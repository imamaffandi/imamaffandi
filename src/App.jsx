import { Suspense, useState, useEffect } from "react";
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
      <Suspense
        fallback={
          <span className="text-white neue flex items-center justify-center tracking-widest h-screen">
            Loading
          </span>
        }
      >
        <div className="noise"></div>
        <SkullScene />
        <Navbar />
        <Header />
        <Content />
        <Projects />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
