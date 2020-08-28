import * as React from "react";
import { HelloWorld } from "my-module";
function App() {
  return (
    <div>
      <HelloWorld onClick={() => console.log("hola")}>Hola</HelloWorld>
    </div>
  );
}
export default App;
