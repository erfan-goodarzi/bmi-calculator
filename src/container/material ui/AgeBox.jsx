import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const AgeBox = (props) => {
  return (
    <div>
      <Box
        sx={{
          width: 151,
          margin: "-16px 12px 38px 5px",
          borderRadius: "14px",
          color: "#6799b0",
          background: " #EDEDED",
          boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
          height: "26vh",
        }}
      >
        <Box
          sx={{
            fontSize: "16px",
            color: "#A1A5B2",
            textAlign: "center",
            fontWeight: "500",
            pt: "16px",
            mb: 1,
          }}
        >
          Age
        </Box>
        <Box sx={{ display: "grid" }}>
          <Button
            sx={{
              minWidth: "13px",
              width: 36,
              margin: "5px 55px",
              background: "#EDEDED",
              fontSize: "19px",
              fontWeight: "800",
              height: 36,
              borderRadius: "50px",
              color: "#A8ACB9",
              boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
              "&:hover": {
                color: "#56CFDB",
              },
            }}
            onClick={props.AgeIncrementHandler}
          >
            +
          </Button>
          <Button
            sx={{
              fontSize: "21px",
              fontWeight: "700",
              color: "#59c7e2 !important",
            }}
            disabled
          >
            {props.age}
          </Button>
          <Button
            sx={{
              minWidth: "13px",
              width: 36,
              margin: "5px 55px",
              background: "#EDEDED",
              fontSize: "19px",
              fontWeight: "800",
              borderRadius: "50px",
              height: 36,
              color: "#A8ACB9",
              boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
              "&:hover": {
                color: "#56CFDB",
              },
            }}
            onClick={props.AgeDecrementHandler}
          >
            -
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export const WeightBox = (props) => {
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
          height: "26vh",
        }}
      >
        <Box
          sx={{
            fontSize: "16px",
            color: "#A1A5B2",
            textAlign: "center",
            fontWeight: "500",
            pt: "16px",
            mb: 1,
          }}
        >
          Weight
        </Box>
        <Box sx={{ display: "grid" }}>
          <Button
            sx={{
              minWidth: "13px",
              width: 36,
              margin: "5px 55px",
              background: "#EDEDED",
              fontSize: "19px",
              fontWeight: "800",
              height: 36,
              borderRadius: "50px",
              color: "#A8ACB9",
              boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
              "&:hover": {
                color: "#56CFDB",
              },
            }}
            onClick={props.WeightIncrementHandler}
          >
            +
          </Button>
          <Button
            sx={{
              fontSize: "21px",
              fontWeight: "700",
              color: "#59c7e2 !important",
            }}
            disabled
          >
            {props.Weight}
          </Button>
          <Button
            sx={{
              minWidth: "13px",
              width: 36,
              margin: "5px 55px",
              background: "#EDEDED",
              fontSize: "19px",
              fontWeight: "800",
              borderRadius: "50px",
              height: 36,
              color: "#A8ACB9",
              boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
              "&:hover": {
                color: "#56CFDB",
              },
            }}
            onClick={props.WeightDecrementHandler}
          >
            -
          </Button>
        </Box>
      </Box>
    </div>
  );
};

