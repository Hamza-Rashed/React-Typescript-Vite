import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(1)
  return (
    <>
        <h1>Counter is {count}</h1>
        <button onClick={() => setCount(current => current + 1)}>+</button>
        <button onClick={() => setCount(current => current - 1)}>-</button>
    </>
  )
}

export default Counter