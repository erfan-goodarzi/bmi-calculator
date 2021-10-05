import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function AgeBox() {
  const [age, setAge] = useState(10);
  const [Weight, setWeight] = useState(54);

  const AgeIncrementHandler = () => {
    if (age < 100) {
      setAge(age + 1);
    }
  };

  const AgeDecrementHandler = () => {
    if (age > 5) {
    setAge(age - 1);
    }
  };

  const WeightIncrementHandler = () => {
    if (Weight < 300) {
      setWeight(Weight + 1);
    }
  };

  const WeightDecrementHandler = () => {
    if (Weight > 10) {
    setWeight(Weight - 1);
    }
  };

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
            onClick={WeightIncrementHandler}
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
            {Weight}
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
            onClick={WeightDecrementHandler}
          >
            -
          </Button>
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
            onClick={AgeIncrementHandler}
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
            {age}
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
            onClick={AgeDecrementHandler}
          >
            -
          </Button>
        </Box>
      </Box>
    </div>
  );
}
