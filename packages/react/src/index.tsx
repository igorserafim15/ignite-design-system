import '../globals.css'

import { ReactNode } from 'react'

type ButtonProps = { children: ReactNode }

export function Button({ children }: ButtonProps) {
  return (
    <button className="px-3 py-2 bg-ignite-500 rounded-lg">{children}</button>
  )
}
