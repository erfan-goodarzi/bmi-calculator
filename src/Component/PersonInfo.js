import Box from "@mui/material/Box";
import { useEffect, useState,useRef } from "react";
import { AgeBox, WeightBox } from "../container/material ui/AgeBox";
import HeightBox from "../container/material ui/HeightBox";

const PersonInfo = () => {
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
    infoRef.current = (
     <p> {((Weight / Height / Height) * 10000).toFixed(2)}</p>
  );
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
      {infoRef.current}
    </Box>
  );
};


export default PersonInfo