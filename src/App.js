import "./App.css";
import Imagecontainer from "./components/Imagecontainer";
import Navmeal from "./components/Navbar/Navmeal";
import Sectiona from "./components/Sectiona";
import Sectionb from "./components/Sectionb";
import Sectionc from "./components/Sectionc";
import Sectiond from "./components/Sectiond";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <section className="">
        <Navmeal />
      </section>
      <div className="bg-custom-color-1">
        <section className="">
          <Sectiona />
        </section>
        <section className="bg-custom-color-1">
          <img
            src="https://www.themealdb.com/images/separator.jpg"
            className="w-full object-cover bg-white"
            alt="SeparatorImage"
          />
        </section>

        <section className="bg-custom-color-1">
          <Sectionb />
        </section>
        <section>
          <Imagecontainer />
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
        <Sectionc />
      </section>
      <section className="bg-custom-color-1">
        <img
          src="https://www.themealdb.com/images/separator.jpg"
          className="w-full object-cover bg-white"
          alt="SeparatorImage"
        />
      </section>
      <section className="bg-custom-color-1">
        <Sectiond />
      </section>
      <section className="bg-custom-color-1">
        <Footer />
      </section>
    </main>
  );
}

export default App;
