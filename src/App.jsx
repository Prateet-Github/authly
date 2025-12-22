import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Documents from "./pages/Documents.jsx";
import NotFound from "./pages/NotFound.jsx";
import FAQ from "./pages/FAQ.jsx";
import Features from "./pages/Features.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/docs" element={<Documents />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route path="/features" element={<Features />}></Route>
    </Routes>
  );
};

export default App;
