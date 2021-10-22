import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSelector,useDispatch } from "react-redux";
import { Height } from "../../features/BmiSlice";



export default function HeightBox() {
  const BmiHeight = useSelector(state => state.bmi.height);
  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        width: 149,
        margin: " -16px 24px",
        borderRadius: "14px",
        color: "#6799b0",
        background: " #EDEDED",
        boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
        height: "55vh",
      }}
    >
      <Box
        sx={{
          fontSize: "16px",
          color: "#A1A5B2",
          textAlign: "center",
          fontWeight: "500",
          pt: "16px",
        }}
      >
        Height
      </Box>
      <Slider
        sx={{
          height: "82%",
          width: "5px",
          padding: "0px 70px",
          marginTop: "8px",
          color: '#b8b7be'
        }}
        aria-label="Temperature"
        defaultValue={140}
        value={BmiHeight}
        valueLabelDisplay="auto"
        orientation="vertical"
        step={2}
        marks
        min={110}
        max={240}
        onChange={(e) => dispatch(Height(e.target.value))}
      />
    
    </Box>
  );
}
