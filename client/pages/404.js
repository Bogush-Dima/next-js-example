import { useRouter } from "next/router"
import { useEffect } from "react"
import { Heading } from "./components/Heading"

const Error = () => {
  const routes = useRouter()

  useEffect(() => {
    setTimeout(() => {
      routes.push("/")
    }, 3000)
  }, [routes])

  return (
    <>
      <Heading text="404 Error" />
      <Heading tag="h2" text="Something was going wrong..." />
    </>
  )
}

export default Error