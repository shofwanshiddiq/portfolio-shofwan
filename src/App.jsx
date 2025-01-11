import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection: bg-gradient-to-br from-gray-900 to-black selection:text-white">
      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Project />
      </div>
    </div>
  );
};

export default App;
