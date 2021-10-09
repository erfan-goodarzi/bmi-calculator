import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (severeThinness, thinness, normal, Overweight, Obese) => {
  return { severeThinness, thinness, normal, Overweight, Obese };
};

const rows = [
  createData("Less then 16", "Severe thinness"),
  createData("16 to 18.4", "Thinness"),
  createData("18.5 24.9", "Normal"),
  createData("25 to 29.9", "Overweight"),
  createData("More then 30", "Obese"),
];

const BmiModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          background: "linear-gradient(85deg, #3bcaed, #56cedc)",
          margin: "2px 8rem",
          padding: "8px 46px",
          border: "none",
          transition: "all 0.2s ease-in-out",
          fontSize: "15px",
          letterSpacing: "inherit",
          borderRadius: "11px !important",
          color: "#EDEDED",
          boxShadow:
            "0 0 10px #59c7e20a, 0 0 40px #59c7e24d, 0 0 10px #00cdffc9",
          "&:hover": {
            color: "#3f6b88",
          },
        }}
      >
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TableContainer
          sx={{
            margin: "6rem 35rem",
            width: "30%",
            boxShadow:
              "5px 5px 18px 5px #908d9e52, -1px -6px 20px 3px #ffffff59",
            backgroundColor: "#EDEDED !important",
          }}
          component={Paper}
        >
          <Table sx={{ minWidth: 460 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.normal}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    sx={{ padding: "17px 1px", textAlign: "center" }}
                    align="right"
                  >
                    {row.severeThinness}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "17px 1px", textAlign: "center" }}
                    align="right"
                  >
                    {row.thinness}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "17px 1px", textAlign: "center" }}
                    align="right"
                  >
                    {row.normal}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "17px 1px", textAlign: "center" }}
                    align="right"
                  >
                    {row.Overweight}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "17px 1px", textAlign: "center" }}
                    align="right"
                  >
                    {row.Obese}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Modal>
    </div>
  );
};

export default BmiModal;
