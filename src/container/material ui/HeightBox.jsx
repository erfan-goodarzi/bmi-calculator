import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function HeightBox({ height, HeightHandler }) {
  return (
    <Box
      sx={{
        width: { lg: 149, sm: 120 },
        margin: " -16px 24px",
        borderRadius: "14px",
        color: "#6799b0",
        background: " #EDEDED",
        boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
        height: { lg: "55vh", md: "34vh", sm: "34vh", xs: "57vh" },
      }}>
      <Box
        sx={{
          fontSize: "16px",
          color: "#A1A5B2",
          textAlign: "center",
          fontWeight: "500",
          pt: "16px",
        }}>
        Height
      </Box>
      <Slider
        sx={{
          height: "82%",
          width: "5px",
          padding: { lg: "0px 70px", md: "0px 72px", sm: "0px 54px", xs: "0px 63px" },
          marginTop: "8px",
          color: "#b8b7be",
        }}
        aria-label="Temperature"
        defaultValue={140}
        value={height}
        valueLabelDisplay="auto"
        orientation="vertical"
        step={2}
        marks
        min={110}
        max={240}
        onChange={HeightHandler}
      />
    </Box>
  );
}
