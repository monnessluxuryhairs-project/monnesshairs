import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./component/global/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
