import { useContext } from "react";
import { Context } from "../_app";

export default function a() {
  const { state, setState } = useContext(Context);
  return (
    <div>
      <div>a page</div>
      {state}
      <button onClick={() => setState(state + 1)}>up</button>
    </div>
  );
}
