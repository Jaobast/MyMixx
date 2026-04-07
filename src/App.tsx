import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage/StartPage";
import Choice from "./Pages/Choice/Choice";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/choice" element={<Choice />} />
      </Routes>
    </HashRouter>
  )
}

export default App
