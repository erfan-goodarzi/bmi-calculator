import Box from "@mui/material/Box";

export default function AgeBox() {
  return (
    <div>
      <Box
        sx={{
          width: 151,
          margin: "-16px 5px",
          borderRadius: "14px",
          color: "#6799b0",
          background: " #EDEDED",
          boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
          height: "23vh",
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
          Weight
        </Box>
      </Box>
      <Box
        sx={{
          width: 151,
          margin: "38px 5px",
          borderRadius: "14px",
          color: "#6799b0",
          background: " #EDEDED",
          boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
          height: "23vh",
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
          Age
        </Box>
      </Box>
    </div>
  );
}
