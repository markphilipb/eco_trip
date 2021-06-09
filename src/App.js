import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Map from "./components/MapBoxComponent/MapBoxComponent";
import HomeGoogle from "./HomeGoogle/HomeGoogle";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <HomeGoogle /> */}
      {/* <GoogleMapTwo /> */}
    </div>
  );
}

export default App;
