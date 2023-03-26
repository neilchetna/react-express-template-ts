import React from 'react'
import ReactDOM from 'react-dom'
import NewApp from "./app"

const App = () => {
  return (
    <div>
      <h1>Hello!!</h1>
      <h2>Welcome to your First React App..!</h2>
      <NewApp num={19}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
