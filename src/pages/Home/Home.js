import Titel from "../../components/Titel/Titel";
import TierList from "../../components/TierList/TierList";
import Diagramm from "../../components/Diagramm/Diagramm";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Titel titel="Herzlich Willkommen, hier sehen sie unsere Tiere:" />
      <TierList />
      <Diagramm />
      <Footer />
    </>
  );
}

export default Home;
