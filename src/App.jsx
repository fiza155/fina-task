import { useState } from "react";

import Frontend from "./pages/inputText";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Frontend />
    </>
  );
}

export default App;
