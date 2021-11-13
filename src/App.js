import Home from "./pages/Home";
import Sectionone from "./pages/SectionOne";
import SectionTwo from "./pages/SectionTwo";
import Sectionthree from "./pages/SectionThree";
import SectionFour from "./pages/SectionFour";
import SectionFive from "./pages/SectionFive";

import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Home />
      <Sectionone />
      <SectionTwo />
      <Sectionthree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;
