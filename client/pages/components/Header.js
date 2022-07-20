import { Heading } from "./Heading"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header>
      <Heading tag="h3" text="Header" />
      <Navbar />
    </header>
  )
}