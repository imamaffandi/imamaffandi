import { Navbar, Header, Content, Projects, Footer } from "./components";
import { SkullScene } from "../src/components/canvas";

const App = () => {
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
