// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from "./BmiSlice";

// export function Counter() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState("2");

//   const incrementValue = Number(incrementAmount) || 0;

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//       </div>
//       <div>
//         <input
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={(e) => setIncrementAmount(e.target.value)}
//         />
//         <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
//           Add Amount
//         </button>
//         <button onClick={() => dispatch(incrementAsync(incrementValue))}>
//           Add Async
//         </button>
//         <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
//           Add If Odd
//         </button>
//       </div>
//     </div>
//   );
// }
