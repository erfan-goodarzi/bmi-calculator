import Box from "@mui/material/Box";
import { useState, useRef } from "react";
import { AgeBox, WeightBox } from "../container/material ui/AgeBox";
import HeightBox from "../container/material ui/HeightBox";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CalButton from "../container/material ui/CalButton";
import BmiModal from "../container/material ui/Modal";

export default function BmiBox({ gender }) {
  const [age, setAge] = useState(23);
  const [Weight, setWeight] = useState(69);
  const [Height, setHeight] = useState(175);
  const infoRef = useRef(22.53);
  const [sug, setSug] = useState(null);
  const [sugBmi, setSugBmi] = useState();
  const [ShowsugBmi, setShowSugBmi] = useState(false);

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

  infoRef.current = (Weight / ((Height * Height) / 10000)).toFixed(1);

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

  const BmiSuggestions = () => {
    setShowSugBmi(true)
    const bmi = infoRef.current;
    if (age <= 18) {
      setSug(<Box>Your bmi is {bmi}</Box>);
    } else if (age >= 19 && age <= 24) {
      setSug(
        <Box>
          Your bmi is {bmi} , The ideal bmi for your age({age}) is between 19
          and 24.
        </Box>
      );
    } else if (age >= 25 && age <= 34) {
      setSug(
        <Box>
          Your bmi is {bmi} , The ideal bmi for your age({age}) is between 20
          and 25.
        </Box>
      );
    } else if (age >= 35 && age <= 44) {
      setSug(
        <Box>
          Your bmi is {bmi} , The ideal bmi for your age({age}) is between 21
          and 26.
        </Box>
      );
    } else if (age >= 45 && age <= 54) {
      setSug(
        <Box>
          Your bmi is {bmi} , The ideal bmi for your age({age}) is between 22
          and 27.
        </Box>
      );
    } else if (age >= 55 && age <= 64) {
      setSug(
        <Box>
          Your bmi is {bmi} , The ideal bmi for your age({age}) is between 23
          and 28.
        </Box>
      );
    } else {
      setSug(
        <Box>
          Your bmi is {bmi} , The ideal bmi for your age({age}) is between 24
          and 29.
        </Box>
      );
    }
    //bmi sugesstion

    if (bmi < 18.5) {
      setSugBmi(
        <Box>
         If, after calculating BMI, the number obtained is less than 18.5, it means that you are underweight. In this case, there is a referral to a nutritionist to prevent the weakening of the body. As harmful as obesity is, extreme weight loss can be serious.
        </Box>
      );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setSugBmi(
        <Box>
          You have a normal weight for your body. It is better to use
          appropriate strategies to maintain and stabilize a balanced weight.
          Eating fruits and vegetables can be an effective step towards being at
          a balanced weight.
        </Box>
      );
    } else if (bmi >= 25 && bmi <= 29.9) {
      setSugBmi(
        <Box>
          The range 25 to 29.9 indicates some overweight. If you do not follow
          the necessary rules about nutrition and physical activity, you will
          probably gain weight after a while. As a result, you need to take
          steps to control and prevent weight gain.
        </Box>
      );
    } else if (age >= 30 && age <= 34) {
      setSugBmi(
        <Box>
          By calculating BMI, the number obtained, if it is higher than 30,
          indicates serious overweight and obesity. The higher this value, the
          greater the excess weight in the person. In this case, you must take
          the appropriate way, including consulting a nutritionist and regular
          physical activity to lose weight.
        </Box>
      );
    } else {
      setSugBmi(
        <Box>
          By calculating BMI, the number obtained, if it is higher than 30,
          indicates serious overweight and obesity. The higher this value, the
          greater the excess weight in the person. In this case, you must take
          the appropriate way, including consulting a nutritionist and regular
          physical activity to lose weight.
        </Box>
      );
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
        <Box>
          <CalButton CalClicked={BmiSuggestions} />
        </Box>
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
        <Box
          sx={{
            width: 176,
            margin: "32px 24px 49px 107px",
            borderRadius: "50%",
            color: "#6799b0",
            background: " #EDEDED",
            boxShadow:
              "9px 6px 18px 5px #908d9e52, -10px -9px 20px 7px #ffffff",
            height: 176,
          }}
        >
          <CircularProgressbar
            maxValue={40}
            ref={infoRef}
            value={infoRef.current}
            text={infoRef.current}
            styles={buildStyles({
              textColor: "#7ca4b7",
              pathColor: "#4fcde0",
              trailColor: "#DADFE6",
              root: {
                width: "44%",
                margin: "10rem 7rem",
              },
            })}
          />
        </Box>
        <Box sx={{ textAlign: "center", fontSize: "17px", fontWeight: "500" , marginTop: '-22px'}}>
          You have{" "}
          <span style={{ fontWeight: "700", color: "#4fcde0" }}>
            {infoRef.current <= 16
              ? "severe thinness"
              : infoRef.current >= 16 && infoRef.current <= 18.4
              ? "thinness"
              : infoRef.current >= 18.5 && infoRef.current <= 24.9
              ? "normal weight"
              : infoRef.current >= 25 && infoRef.current <= 29.9
              ? "Overweight"
              : infoRef.current >= 30 && infoRef.current <= 34.9
              ? "Obese"
              : infoRef.current >= 35
              ? "very Obese"
              : null}
          </span>
          .
        </Box>
        <Box
          sx={{
            width: "78%",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "400",
            margin: " 23px 41px",
          }}
        >
          {sug}
        </Box>
        {ShowsugBmi ?    <Box
          sx={{
            width: "78%",
            textAlign: "center",
            background: "#dadfe6",
            fontSize: "16px",
            fontWeight: "400",
            margin: "19px 29px",
            padding: "8px 14px",
            boxShadow:
              "9px 6px 18px 5px #908d9e52, -10px -9px 20px 7px #ffffff",
            borderRadius: "13px",
            textTransform: 'lowercase !important',
            lineHeight:'1.5',

          }}
        >
          {sugBmi}
        </Box> : null}
        <BmiModal/>
      </Box>
    </Box>
  );
}
