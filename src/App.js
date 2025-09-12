import "./App.css"
import Food from "./components/foods/food";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./components/servicess/services";
import Contact from "./components/contact/contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Food />
      <Services />
      <Contact />
      
    </div>
  );
}

export default App;
