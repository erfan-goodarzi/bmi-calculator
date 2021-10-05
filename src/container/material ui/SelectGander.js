import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function SelectGender() {
  return (
    <Box  sx={{margin:' 3rem 1rem',width: '100%'}}>
      <Button
 
        
      sx={{
        background: 'linear-gradient(45deg, #59C7E2, #56CFDB)',
        margin: "6px 9px", 
        padding: '10px 56px',
        fontSize: '14px',
        borderRadius: '14px',
        color: '#EDEDED',
        boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
        '&:hover': {
          color: '#3f6b88',

          
        }
      }}
      >Male</Button>
      <Button
        sx={{
          background: '#EDEDED',
          padding: '10px 56px',
          margin: "6px 17px", 
          fontSize: '14px',
          borderRadius: '14px',
          color: '#A8ACB9',
          boxShadow: "3px 5px 7px 1px #908d9e80, -4px -2px 6px 2px #ffffff",
          '&:hover': {
            color: '#56CFDB',
            
          }
        }}
      >Female</Button>
    </Box>
  );
}


 
 
 