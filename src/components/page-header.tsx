// components/page-header.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/dashboard": "Dashboard", 
  "/pokemon": "Pokemon Search",
  "/pokedex": "Pokedex",
  "/pokemon/favorites": "Favorites",
}

export function PageHeader() {
  const pathname = usePathname()
  const pageTitle = pageTitles[pathname] || "Page"

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b px-4 lg:px-6">
      <SidebarTrigger className="-ml-1" />
      <Separator 
        orientation="vertical" 
        className="mr-4 data-[orientation=vertical]:h-4" 
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="font-medium">{pageTitle}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
