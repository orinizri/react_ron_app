import NavigationBar from "./components/navbar/navigation_bar";
import Home from "./views/home/home";
import About from "./views/about/about";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
