import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Titel from "../../components/Titel/Titel";

function Faq() {
  return (
    <div id="faq" style={{ textAlign: "center" }}>
      <Navbar />
      <Titel titel="Hier finden Sie oft gestellte Fragen:" />
      <h1>Hallo von der FAQ Seite!</h1>
      <Footer />
    </div>
  );
}

export default Faq;
