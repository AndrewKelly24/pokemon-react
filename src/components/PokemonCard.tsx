'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function PokemonCard({
  name,
  type }
) {
  const capName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{capName}</CardTitle>
          <CardDescription>{type}</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Base Stats</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  )
}


