import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PokemonList from "../../components/PokemonList/PokemonList";
import Titel from "../../components/Titel/Titel";

function Pokemon() {
  return (
    <div id="pokemon" style={{ textAlign: "center" }}>
      <Navbar />
      <Titel titel="Hier sehen sie eine Sammlung von Pokemons:" />
      <PokemonList />
      <Footer />
    </div>
  );
}

export default Pokemon;
