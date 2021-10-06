import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        background: "#E9E9E9 !important",
        fontFamily: "Nunito !important",
      },
      "*": {
        fontFamily: "Nunito !important",
        textTransform: "capitalize !important",
      },
      ".MuiButton-root": {
        fontSize: "1rem",
      },
      ".MuiSlider-thumb": {
        background: "#57cedd  !important",
      },
     ".MuiButtonBase-root.MuiToggleButton-root.Mui-selected.MuiToggleButton-warning":{
       color: '#0be9ff',
       background: '#6799b0c7'
     }
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;


 