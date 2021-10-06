import Box from "@mui/material/Box";

export default function BmiBox({ title, gender, age, weight, height, cal }) {
  return (
    <Box
      sx={{
        width: 383,
        marginLeft: "21rem",
        marginRight: "-10rem",
        borderRadius: "14px",
        color: "#6799b0",
        background: " #EDEDED",
        boxShadow: "5px 5px 49px #a1b1b6, -5px -5px 49px #ffffff",
        height: "92vh",
      }}
    >
      <Box
        sx={{
          fontFamily: "Nunito",
          fontSize: "19px",
          textAlign: "center",
          mt: "31px",
        }}
      >
        {title}{" "}
      </Box>
      <Box>{gender}</Box>
      <Box sx={{ display: "flex", mt: '40px' }}>
        <Box>{height}</Box>
        <Box sx={{ display: "grid" }}>
          <Box>{age}</Box>
          <Box>{weight}</Box>
        </Box>
      </Box>
      <Box>{cal}</Box>
    </Box>
  );
}
