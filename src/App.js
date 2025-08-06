import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Detailedproduct from "./components/Detailedproduct/Detailedproduct";
import Finalcart from "./components/Finalcart/Finalcart";
import LoginRegiste from "./components/Modal/LoginRegiste";
import Detailedlap from "./components/Detailedlap/Detailedlap";
import Prct from "./components/Prct/Prct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detailedproduct/:id" element={<Detailedproduct />}></Route>
        <Route path="/detailedlap/:id" element={<Detailedlap />}></Route>
        <Route path="/checkout" element={<Finalcart />}></Route>
        <Route path="/login" element={<LoginRegiste />}></Route>
        <Route path="/prct" element={<Prct />}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
