import "./App.css"
import Food from "./components/foods/food";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./components/servicess/services";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Food />
      <Services />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
