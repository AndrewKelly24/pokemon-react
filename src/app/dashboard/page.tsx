export default async function Page() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  const pokemon = await data.json()
  console.log(pokemon)
  return (
    <ul>
      <li>Name: {pokemon.name}</li>
      <li>Height: {pokemon.height}</li>
      <li>Id{pokemon.id}</li>
    </ul>
  )
}
