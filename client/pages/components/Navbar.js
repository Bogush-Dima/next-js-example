import Link from "next/link"
import { routesConfig } from "../config/routes"
import { Heading } from "./Heading"

export const Navbar = () => {
  return (
    <>
      <Heading tag="h3" text="Logo" />
      {routesConfig.map(({ id, path, text }) => (
        <Link key={id} href={path}>{text}</Link>
      ))}
    </>
  )
}