import { Heading } from "./Heading"

export const ContactInfo = ({ contact }) => {
  if (!contact) {
    return (
      <Heading tag="h3" text="Empty Contact Info" />
    )
  }
  
  const { name, username, email, address } = contact
  const { street, city } = address

  return (
    <>
      <Heading tag="h3" text={`${name} ${username} (${email})`} />
      <p>{`${street}, ${city}`}</p>
    </>
  )
}