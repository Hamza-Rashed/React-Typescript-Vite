import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import Section from "./components/Section"

function App() {
  
  return (
    <>
    <Heading title={"Hamza"}/>
    <Section children={"Hello"} title={"25"}/>
    <Counter />
    <List items={["Coffie", "Dinner"]} render={(item: string) => <span>{item}</span>}/>
    </>
  )
}

export default App
