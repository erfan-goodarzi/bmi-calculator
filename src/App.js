import { Box } from "@mui/system";
import BmiBox from "./Component/Bmi-box";

import GlobalStyles from "./container/material ui/Global-style";
import SelectGender from "./container/material ui/SelectGander";
import CalButton from "./container/material ui/CalButton";
import PersonInfo from "./Component/PersonInfo";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Box sx={{ display: "flex", mt: 4 }}>
        <BmiBox
          title="BMI CALCULATOR"
          gender={<SelectGender />}
          personInfo={<PersonInfo/>}
          cal={<CalButton />}
        />
        <BmiBox title="BMI RESULT" />
      </Box>
    </div>
  );
}

export default App;
