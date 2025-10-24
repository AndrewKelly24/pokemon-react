// components/page-container.tsx
import { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export function PageContainer({
  children,
  className = ""
}: PageContainerProps) {
  return (
    <div
      className={`flex flex-1 flex-col gap-6 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto ${className}`}
    >
      {children}
    </div>
  )
}
