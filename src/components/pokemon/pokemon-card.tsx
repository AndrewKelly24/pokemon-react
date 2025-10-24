// components/pokemon/pokemon-card.tsx
import Link from "next/link"

interface PokemonCardProps {
  name: string
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={`/pokemon/${name}`}
      className="block p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
          <span className="text-muted-foreground capitalize">{name}</span>
        </div>
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
      </div>
    </Link>
  )
}