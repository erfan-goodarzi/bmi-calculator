import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        background: "#E9E9E9 !important",
        fontFamily: "Nunito !important"
      },
      '*': {
        fontFamily: 'Nunito !important',
        textTransform: 'capitalize !important'
      },
      '.MuiButton-root': {
        fontSize: '1rem',
      }
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;