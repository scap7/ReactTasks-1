import Clock from "./Components/Clock";
import Greetings from "./Components/Greetings";
import Counter from "./Components/Counter"
import ClockBackground from "./Components/ClockBackground";

function App() {
  return (
    <div className="container">
      <Clock/>
      <Greetings/>
      <Counter/>
    </div>
  )
}

export default App
