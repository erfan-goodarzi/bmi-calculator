import BmiBox from "./Component/Bmi-box";

import GlobalStyles from "./container/material ui/Global-style";
import SelectGender from "./container/material ui/SelectGander";


function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <BmiBox gender={<SelectGender />} />
    </div>
  );
}

export default App;
