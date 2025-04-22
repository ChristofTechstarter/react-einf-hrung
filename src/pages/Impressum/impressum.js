import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Titel from "../../components/Titel/Titel";

function Impressum() {
  return (
    <div id="impressum" style={{ textAlign: "center" }}>
      <Navbar />
      <Titel titel="Hier finden Sie unser Impressum:" />
      <h1>Hallo von der Impressum Seite!</h1>
      <Footer />
    </div>
  );
}

export default Impressum;
