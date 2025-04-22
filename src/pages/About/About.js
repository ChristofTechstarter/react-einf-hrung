import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Titel from "../../components/Titel/Titel";

function About() {
  return (
    <div id="about" style={{ textAlign: "center" }}>
      <Navbar />
      <Titel titel="Hier finden Sie Information zu unserer Tierklinik:" />
      <h1>Hallo von der Über Uns Seite!</h1>
      <Footer />
    </div>
  );
}

export default About;
