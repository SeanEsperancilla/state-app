import { useState } from "react"
import Button1 from "./Button1";
import ControlledComponents from "./ControlledComponents";
import UncontrolledComponents from "./UncontrolledComponents";
import SimpleForm from "./SimpleForm";

export default function App() {
    const [count, setCount] = useState<number>(0);

    // const updateCount = ()=> {
    //   setCount(prev => prev + 1);
    // }
    // suggested, much cleaner look

  return (
    <>
      <h1>Count value is {count}</h1>
      {/* <button onClick={updateCount}>Update Count</button> */}
      <button onClick={() => setCount(prev => prev + 1)}>Update Count</button>
      <Button1 />
      <ControlledComponents />
      <UncontrolledComponents />
      <SimpleForm />
    </>
  )
}

