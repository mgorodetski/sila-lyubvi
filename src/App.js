import About from "./global/About";
import CulturalEvents from "./global/CulturalEvents";
import Footer from "./global/Footer";
import Topbar from "./global/TopBar";
import './styles.css';
import './styles.module.css';



function App() {
  return (
    <div className="app">
      <Topbar/>
      <About/>
      <CulturalEvents/>
      <Footer/>
    </div>
  );
}

export default App;
