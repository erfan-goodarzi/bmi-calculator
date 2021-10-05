import { Box } from "@mui/system";
import BmiBox from "./Component/Bmi-box";
import AgeBox from "./container/material ui/AgeBox";
import GlobalStyles from "./container/material ui/Global-style";
import HeightBox from "./container/material ui/HeightBox";
import SelectGender from "./container/material ui/SelectGander";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Box sx={{display:'flex', mt: 4}}>
      <BmiBox title="BMI CALCULATOR" gender={<SelectGender/>} height={<HeightBox/>} age={<AgeBox/>}/>
      <BmiBox title="BMI RESULT" />
      </Box>
    </div>
  );
}

export default App;
