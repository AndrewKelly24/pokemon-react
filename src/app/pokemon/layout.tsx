// app/pokemon/layout.tsx
import { ReactNode } from "react"
import { PageHeader } from "@/components/page-header"
import { PageContainer } from "@/components/page-container"

interface PokemonLayoutProps {
  children: ReactNode
}

export default function PokemonLayout({ children }: PokemonLayoutProps) {
  return (
    <>
      <PageHeader />
      <PageContainer className="max-w-7xl mx-auto">
        {children}
      </PageContainer>
    </>
  )
}
