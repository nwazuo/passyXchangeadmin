import { Box, Container } from "@mui/material";
import * as React from "react";
import BasicModal from "./modal";

const Card = () => {
  const mainDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    marginBottom: "30px",
    padding: "10px",
    border: "0.1px solid black",
    marginRight: "10px",
    borderRadius: "10px",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Box sx={mainDiv}>
        {/* <Box>
          <img src={Green} alt="" className="iconimg" />
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h2 style={{ marginRight: "15px" }}>$500</h2>

            <h6 style={{ marginRight: "15px" }}>
              25th Dec. 2022,
              <br /> 2:00pm
            </h6>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <button className="btnCopy">Copy trx</button>
            <button className="btnCopy" onClick={() => handleOpen()}>
              Comment
            </button>
            <button className="btnGreen">Incoming</button>
            <button className="btnYellow">Confirmations</button>
          </Box>
          <Box>
            <p>
              Passy: From Whatsapp, this user paid N300,000 and has 1
              confirmation
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card;
