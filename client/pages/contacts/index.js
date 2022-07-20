import { Heading } from "../components/Heading"

export const getStaticProps = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      contacts: data
    }
  }
}

const Contacts = ({ contacts }) => {
  return (
    <>
      <Heading text="Contacts List" />
      {contacts.map(({id, name, email}) => (
        <li key={id}>
          <strong>{name}</strong> ({email})
        </li>
      ))}
    </>
  )
}

export default Contacts