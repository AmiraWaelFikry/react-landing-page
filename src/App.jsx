import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <img
        className="backgroung-img "
        src="https://rrtffs.csb.app/img/decore.svg"
        alt=""
      />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
