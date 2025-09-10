import "./App.css"
import Food from "./components/foods/food";
import Header from "./components/header";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Food />
      
    </div>
  );
}

export default App;
