import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Titel from "../../components/Titel/Titel";
import YugiohList from "../../components/YugiohList/YugiohList";

function Yugioh() {
  return (
    <div id="pokemon" style={{ textAlign: "center" }}>
      <Navbar />
      <Titel titel="Hier sehen sie eine Sammlung von Yu-Gi-Oh Karten:" />
      <YugiohList />
      <Footer />
    </div>
  );
}

export default Yugioh;
