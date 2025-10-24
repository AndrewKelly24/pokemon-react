import { PokemonGrid } from "@/components/pokemon/pokemon-grid"

export default function PokemonSearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pokemon Search</h1>
        <p className="text-muted-foreground">Discover all 151+ pokemon!</p>
      </div>
      <PokemonGrid />
    </div>
  )
}
