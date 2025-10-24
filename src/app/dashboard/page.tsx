// app/pokemon/page.tsx
import { PageHeader } from "@/components/page-header"
import { PageContainer } from "@/components/page-container"
import PokemonCard from "@/components/PokemonCard"
export default function PokemonPage() {
  return (
    <>
      <PageHeader />
      <PageContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PokemonCard name="pikachu" type="fire" />
          <PokemonCard name="charizard" />
          <PokemonCard name="bulbasaur" />
          <PokemonCard name="squirtle" />
          <PokemonCard name="jigglypuff" />
          <PokemonCard name="ditto" />
        </div>
      </PageContainer>
    </>
  )
}
