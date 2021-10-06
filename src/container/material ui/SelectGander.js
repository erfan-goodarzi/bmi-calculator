import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";


export default function SelectGender() {
  const [isAvtive, setIsActive] = useState(null);
  const isActiveHandler = (event, newAlignment) => {
    setIsActive(newAlignment);
  };

  return (
    <Box sx={{ margin: " 2rem 1rem", width: "100%" }}>
      <ToggleButtonGroup
      color="warning"
      value={isAvtive}
      exclusive
      onChange={isActiveHandler}
      >
        <ToggleButton
          value="Male"
          sx={{
            background: "linear-gradient(45deg, #59C7E2, #56CFDB)",
            margin: "6px 9px",
            padding: "10px 56px",
            border: 'none',
            transition: 'all 0.2s ease-in-out',
            fontSize: "14px",
            borderRadius: "11px !important",
            color: "#EDEDED",
            boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
            "&:hover": {
              color: "#3f6b88",
            },
          }}
        >
          Male
        </ToggleButton>
        <ToggleButton
         value="Female"
          sx={{
            background: "#EDEDED",
            padding: "10px 53px",
            border: 'none',
            transition: 'all 0.2s ease-in-out',
            margin: "6px 20px !important",
            fontSize: "14px",
            borderRadius: "11px !important",
            color: "#A8ACB9",
            boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
            "&:hover": {
              color: "#56CFDB",
              background: '#9cd6e430',
            },
          }}
        >
          Female
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
