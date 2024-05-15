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

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <section className="">
          <Navmeal />
        </section>
        <div>
          <Routes>
            <Route path="/category/:categoryId" element={<CategoryDetails />} />
          </Routes>
        </div>
        <div className="bg-custom-color-1">
          <section className="">
            <Routes>
              <Route path="/" element={<Sectiona />} />
            </Routes>
          </section>
          <section className="bg-custom-color-1">
            <img
              src="https://www.themealdb.com/images/separator.jpg"
              className="w-full object-cover bg-white"
              alt="SeparatorImage"
            />
          </section>

          <section className="bg-custom-color-1">
            <Routes>
              <Route path="/" element={<Sectionb />} />
            </Routes>
          </section>
          <section>
            <Routes>
              <Route path="/" element={<Imagecontainer />} />
            </Routes>
          </section>
        </div>

        <section className="bg-custom-color-1">
          <img
            src="https://www.themealdb.com/images/separator.jpg"
            className="w-full object-cover bg-white"
            alt="SeparatorImage"
          />
        </section>
        <section className="bg-custom-color-1">
          <Routes>
            <Route path="/" element={<Sectionc />} />
          </Routes>
        </section>
        <section className="bg-custom-color-1">
          <img
            src="https://www.themealdb.com/images/separator.jpg"
            className="w-full object-cover bg-white"
            alt="SeparatorImage"
          />
        </section>
        <Routes>
          <Route path="/" element={<Sectiond />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
