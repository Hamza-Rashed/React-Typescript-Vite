import { ReactElement } from "react"

interface titleTypes{
    title: string
}

const Heading = ({title}: titleTypes): ReactElement => {
  return <h1>{title}</h1>
}

export default Heading