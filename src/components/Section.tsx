import { ReactNode } from "react"

interface SectionTypes{
    title?: string
    children: ReactNode
}

const Section = ({title, children}: SectionTypes) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}

export default Section