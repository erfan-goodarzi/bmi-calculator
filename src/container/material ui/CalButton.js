import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CalButton() {
  return (
    <Box>
      <Button
        sx={{
          background: "linear-gradient(85deg, #3bcaed, #56cedc)",
          margin: "56px 19px",
          padding: "7px 154px",
          border: "none",
          transition: "all 0.2s ease-in-out",
          fontSize: "15px",
          borderRadius: "11px !important",
          color: "#EDEDED",
          boxShadow: "0 0 10px #59c7e20a, 0 0 40px #59c7e24d, 0 0 10px #00cdffc9",
          "&:hover": {
            color: "#3f6b88",
          },
        }}
      >
        Male
      </Button>
    </Box>
  );
}

