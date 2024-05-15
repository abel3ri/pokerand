import "../styles/Pokemon.css";
export default function Pokemon() {
  const randNum = Math.floor(Math.random() * 151) + 1;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`;
  return (
    <>
      <div className="Pokemon">
        <h1>Pokemon #{randNum}</h1>
        <img src={imgUrl} alt={`pokemon image ${randNum}`} />
      </div>
    </>
  );
}
