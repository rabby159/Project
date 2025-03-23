import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Players from "./components/Players/Players";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Players></Players>
      <Newsletter></Newsletter>
    </>
  );
}

export default App;
