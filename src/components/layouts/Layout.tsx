import { ReactNode } from "react"
import { Header } from "./Header"

interface Props {
  children: ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )   
}