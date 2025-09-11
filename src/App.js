import "./App.css"
import Food from "./components/foods/food";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./components/servicess/services";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Food />
      <Services />
      
    </div>
  );
}

export default App;
