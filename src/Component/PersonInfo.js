import Box from "@mui/material/Box";
import { useState } from "react";
import {AgeBox,WeightBox} from "../container/material ui/AgeBox";

export const PersonAge = () => {
  const [age, setAge] = useState(13);
  
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
      <AgeBox age={age} AgeIncrementHandler={AgeIncrementHandler} AgeDecrementHandler={AgeDecrementHandler} />
    </Box>
  );
};


export const PersonWeight = () => {
 
  const [Weight, setWeight] = useState(12);

 
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
    <Box>
      <WeightBox Weight={Weight} WeightIncrementHandler={WeightIncrementHandler} WeightDecrementHandler={WeightDecrementHandler} />
    </Box>
  );
};
