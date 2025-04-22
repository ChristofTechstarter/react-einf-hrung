import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Titel from "../../components/Titel/Titel";

function Kontakt() {
  return (
    <div id="kontakt" style={{ textAlign: "center" }}>
      <Navbar />
      <Titel titel="Hier können sie uns kontaktieren:" />
      <h1>Hallo von der Kontakt Seite!</h1>
      <Footer />
    </div>
  );
}

export default Kontakt;
