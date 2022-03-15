import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CalButton({ CalClicked }) {
  return (
    <Box>
      <Button
        onClick={CalClicked}
        sx={{
          background: "linear-gradient(85deg, #3bcaed, #56cedc)",
          margin: "56px 21px",
          padding: { lg: "7px 132px", sm: "0px 129px", xs: "9px 119px " },
          border: "none",
          transition: "all 0.2s ease-in-out",
          fontSize: { lg: "15px", sm: "12px" },
          letterSpacing: "inherit",
          borderRadius: "11px !important",
          color: "#EDEDED",
          boxShadow:
            "0 0 10px #59c7e20a, 0 0 40px #59c7e24d, 0 0 10px #00cdffc9",
          "&:hover": {
            color: "#3f6b88",
          },
        }}>
        Let's begin
      </Button>
    </Box>
  );
}
