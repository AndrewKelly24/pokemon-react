'use client'

import { useEffect, useState, use } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PokemonClient } from 'pokenode-ts'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

interface Pokemon {
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
}

export default function PokemonPage({ params }: { params: { name: string } }) {
  const { name } = use(params)
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        setError(null)

        // Create the Pokémon client (like creating a DbContext in .NET)
        const pokeApi = new PokemonClient()

        // Fetch the specific Pokémon by name (params.name comes from URL)
        const result = await pokeApi.getPokemonByName(name)
        setPokemon(result)
      } catch (err) {
        setError('Pokémon not found! 😢')
        console.error('Error fetching Pokémon:', err)
      } finally {
        setLoading(false)
      }
    }

    if (name) {
      fetchPokemon()
    }
  }, [name])

  // Loading state (like a spinner in .NET apps)
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-muted-foreground">Loading Pokémon...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-destructive">{error}</p>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/pokemon">Browse Pokémon</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Success state - Render the Pokémon card!
  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl font-bold capitalize tracking-wide">
            {pokemon?.name}
          </CardTitle>
          <CardDescription className="text-lg">
            # {pokemon?.id || 'Unknown'}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-6 p-6">
          {/* Official artwork - centered and responsive */}
          <div className="relative w-64 h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full p-6">
            <Image
              src={pokemon?.sprites.other['official-artwork'].front_default || ''}
              alt={pokemon?.name || ''}
              width={256}
              height={256}
              className="object-contain"
              priority
            />
          </div>

          {/* Types - like badges/tags */}
          <div className="flex flex-wrap gap-3 justify-center">
            {pokemon?.types.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
