import BmiBox from "./Component/Bmi-box";

import GlobalStyles from "./container/material ui/Global-style";
import SelectGender from "./container/material ui/SelectGander";
import CalButton from "./container/material ui/CalButton";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <BmiBox gender={<SelectGender />} cal={<CalButton />} />
    </div>
  );
}

export default App;
