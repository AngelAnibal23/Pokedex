import SearchPokemon from "./components/findPokemon"
import { ThemeSwitch } from "./context/SwitchTheme"

function App() {

  return (
    <>
      <div className="min-h-screen bg-base-200 flex flex-col items-center justify-content">
        <h1 className="text-4xl font-bold text-primary">
          Pokedex App
        </h1>
          <SearchPokemon/>
          <ThemeSwitch/>
      </div>
    </>
  )
}

export default App
