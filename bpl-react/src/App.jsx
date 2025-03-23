import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
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
      <Footer></Footer>
    </>
  );
}

export default App;
