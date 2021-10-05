import { Box } from "@mui/system";
import BmiBox from "./Component/Bmi-box";
import GlobalStyles from "./container/material ui/Global-style";
import SelectGender from "./container/material ui/SelectGander";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Box sx={{display:'flex', mt: 7}}>
      <BmiBox title="BMI CALCULATOR" gender={<SelectGender/>}/>
      <BmiBox title="BMI RESULT" />
      </Box>
    </div>
  );
}

export default App;
