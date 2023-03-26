import React from "react"

type Props = {
    num: number
}

function App({num}: Props) {
    return <h1>Total Number: {num}</h1>
}

export default App