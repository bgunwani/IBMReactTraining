import Hello from "./Hello"

function App() {

  return (
    <>
      <h2>App Component</h2>
      <p>This is the app component.</p>
      {/* <Hello></Hello> */}
      {/* <Hello /> */}
      <Hello username="John Smith" age={30} location="New York" hobbies={["Reading", "Writing", "Singing"]} />
      <Hello />
    </>
  )
}

export default App
