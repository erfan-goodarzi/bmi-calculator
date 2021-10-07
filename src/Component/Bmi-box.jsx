import Box from "@mui/material/Box";
import { useEffect, useState, useRef } from "react";
import { AgeBox, WeightBox } from "../container/material ui/AgeBox";
import HeightBox from "../container/material ui/HeightBox";


export default function BmiBox({ gender, cal }) {
  const [age, setAge] = useState(13);
  const [Weight, setWeight] = useState(66);
  const [Height, setHeight] = useState(175);
  const infoRef = useRef(null);

  const GetHeight = (e) => {
    setHeight(e.target.value);
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

  useEffect(() => {
    infoRef.current = <p> {((Weight / Height / Height) * 10000).toFixed(2)}</p>;
  }, [age, Weight, Height]);

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

  return (
    <Box sx={{ display: "flex", mt: 4 }}>
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
        BMI CALCULATOR
        </Box>
        <Box>{gender}</Box>
        <Box>
          <Box sx={{ display: "flex", mt: "40px" }}>
            <Box>
              <HeightBox height={Height} HeightHandler={GetHeight} />
            </Box>
            <Box sx={{ display: "grid" }}>
              <Box>
                {" "}
                <AgeBox
                  age={age}
                  AgeIncrementHandler={AgeIncrementHandler}
                  AgeDecrementHandler={AgeDecrementHandler}
                />
              </Box>
              <Box>
                {" "}
                <WeightBox
                  Weight={Weight}
                  WeightIncrementHandler={WeightIncrementHandler}
                  WeightDecrementHandler={WeightDecrementHandler}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>{cal}</Box>
      </Box>
   
   
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
         BMI RESULT
        </Box>
        {infoRef.current}
      </Box>
    </Box>
  );
}
