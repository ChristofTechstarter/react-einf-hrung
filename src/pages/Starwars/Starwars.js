import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import StarwarsList from "../../components/StarwarsList/StarwarsList";
import Titel from "../../components/Titel/Titel";

function Starwars() {
  return (
    <div id="starwars" style={{ textAlign: "center" }}>
      <Navbar />
      <Titel titel="Hier sehen sie eine Sammlung aus dem Star wars Universum:" />
      <StarwarsList />
      <Footer />
    </div>
  );
}

export default Starwars;
