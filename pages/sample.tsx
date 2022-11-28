import React from "react";

function sample() {
  return <div>sample</div>;
}

export default sample;

// import { useContext } from "react";
// import { Context } from "./_app";
// import Link from "next/link";

// export default function Sample() {
//   const { state, setState } = useContext(Context);
//   return (
//     <div>
//       <div>sample</div>
//       {state}
//       <button onClick={() => setState(state + 1)}>up</button>
//       <Link href="/details/a">a page</Link>
//     </div>
//   );
// }
