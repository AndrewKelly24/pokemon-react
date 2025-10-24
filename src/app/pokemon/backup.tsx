'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { PokemonClient } from 'pokenode-ts'

interface PokemonListItem {
  name: string
  url: string
}

interface PokemonCard {
  name: string
  id: number
  sprite: string
}

export default function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState<PokemonCard[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([])

  // Fetch initial 20 Pokémon (like GetProductsAsync(1, 20) in .NET)
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        const pokeApi = new PokemonClient()

        // Get first 20 Pokémon (pagination!)
        const { results } = await pokeApi.listPokemons(0, 20)
        setAllPokemon(results)

        // Extract basic info for cards
        const pokemonCards = await Promise.all(
          results.map(async (pokemon): Promise<PokemonCard> => {
            const fullPokemon = await pokeApi.getPokemonByName(pokemon.name)
            return {
              name: pokemon.name,
              id: fullPokemon.id,
              sprite: fullPokemon.sprites.front_default || ''
            }
          })
        )

        setPokemonList(pokemonCards)
      } catch (error) {
        console.error('Error fetching Pokémon:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  // Filter Pokémon by name (client-side search)
  const filteredPokemon = useMemo(() => {
    if (!searchTerm) return pokemonList

    return pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [pokemonList, searchTerm])

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 animate-spin" />
            <p className="text-xl text-muted-foreground">Loading Pokémon...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Pokémon by name..."
            className="w-full pl-12 pr-4 py-6 text-lg bg-background/80 backdrop-blur-lg border border-border/50 shadow-lg rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground text-center mb-8">
          Found {filteredPokemon.length} Pokémon
          {searchTerm && ` for "${searchTerm}"`}
        </p>
      </div>

      {/* Pokémon Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredPokemon.map((pokemon) => (
          <Link
            key={pokemon.name}
            href={`/pokemon/${pokemon.name}`}
            className="block group"
          >
            <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br from-white/70 to-white/20 backdrop-blur-sm">
              <CardHeader className="pb-4 pt-6">
                {/* Pokémon Sprite */}
                <div className="relative mx-auto w-24 h-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full p-4 group-hover:bg-indigo-100 transition-colors">
                  <Image
                    src={pokemon.sprite || '/placeholder-pokemon.png'}
                    alt={pokemon.name}
                    width={96}
                    height={96}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <CardTitle className="text-lg font-bold capitalize text-center tracking-wide mt-4 truncate">
                  {pokemon.name}
                </CardTitle>

                <CardDescription className="text-center text-sm font-mono bg-black/10 px-2 py-1 rounded-full w-fit mx-auto">
                  #{pokemon.id.toString().padStart(3, '0')}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filteredPokemon.length === 0 && !loading && (
        <div className="text-center py-24">
          <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
            No Pokémon found
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Try searching for a different Pokémon name.
          </p>
          <Button variant="outline" size="lg" onClick={() => setSearchTerm('')}>
            Clear Search
          </Button>
        </div>
      )}
    </div>
  )
}
