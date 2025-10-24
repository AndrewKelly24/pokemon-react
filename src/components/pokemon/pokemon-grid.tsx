// components/pokemon/pokemon-grid.tsx
"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { PokemonCard } from "./pokemon-card"

interface Pokemon {
  name: string
  url: string
}

export function PokemonGrid() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchPokemon()
  }, [])

  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const data = await res.json()
      console.log(data.results)
      setPokemon(data.results)
    } catch (error) {
      console.error("Failed to fetch pokemon:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-muted rounded-xl h-64" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="relative max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search pokemon (e.g. pikachu, charizard...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border shadow-sm focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredPokemon.map((poke) => (
          <PokemonCard key={poke.name} name={poke.name} />
        ))}
      </div>

      {filteredPokemon.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No pokemon found 😢</p>
          <p className="text-sm mt-2">Try searching for something like "pikachu"</p>
        </div>
      )}
    </div>
  )
}