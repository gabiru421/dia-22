import "./App.css";
import { AlertBox } from "./components/AlertBox";
import { SuccessBox } from "./components/SuccessBox";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Exercício Motion + Variants</h1>

      <AlertBox />

      <br />

      <SuccessBox />
    </div>
  );
}

export default App;