import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import './styles.css';
import './styles.module.css';
import MentalSupport from "./global/MentalSupport";
import PsychoSupport from "./pages/PsychoSupport";



function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/psycho-support" element={<PsychoSupport />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
