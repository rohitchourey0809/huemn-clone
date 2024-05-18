import "./App.css";
import Imagecontainer from "./components/Imagecontainer";
import Navmeal from "./components/Navbar/Navmeal";
import Sectiona from "./components/Sectiona";
import Sectionb from "./components/Sectionb";
import Sectionc from "./components/Sectionc";
import Sectiond from "./components/Sectiond";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryDetails from "./components/CategoryDetails";
import FavoritesComponent from "./components/Favourate";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Navmeal />
        <div>
          <Routes>
            <Route path="/category/:categoryId" element={<CategoryDetails />} />
          </Routes>
        </div>
        <div className="bg-custom-color-1">
          <Routes>
            <Route path="/" element={<Sectiona />} />
          </Routes>

          <Routes>
            <Route path="/" element={<Sectionb />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Imagecontainer />} />
          </Routes>
        </div>

        <Routes>
          <Route path="/" element={<Sectionc />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Sectiond />} />
        </Routes>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route path="/favorites" element={<FavoritesComponent />} />
          </Routes>
        </DndProvider>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
