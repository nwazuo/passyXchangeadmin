import { Box, Container } from "@mui/material";
import * as React from "react";
import BasicModal from "./modal";

const Card = (props) => {
  //console.log(props);
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

  const handleTime = (id) => {
    let date1 = new Date(id * 1000).toLocaleTimeString();
    const date2 = new Date(date1).toString();
    return date1;
  };

  const handleDate = (id) => {
    let date1 = new Date(id * 1000).toLocaleDateString();
    const date2 = new Date(date1).toUTCString();
    return date2;
  };

  const handleValue = (amount) => {
    const res = amount / 10000000;
    return res;
  };

  return (
    <>
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Box sx={mainDiv}>
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
            <h2 style={{ marginRight: "15px" }}>
              {props.data.isCredit
                ? handleValue(props.data.outAmount)
                : handleValue(props.data.inAmount)}
            </h2>

            <h6 style={{ marginRight: "15px" }}>
              {handleDate(props.data.time)}
              <br />
              {/* {handleDate(props.data.time).split("T")[1].split(".")[0]} */}
            </h6>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btnCopy"
              onClick={() =>
                navigator.clipboard.writeText(props.data.hash).then(() => {
                  // Alert the user that the action took place.
                  // Nobody likes hidden stuff being done under the hood!
                  alert("Copied to clipboard");
                })
              }
            >
              Copy trx
            </button>
            <button className="btnCopy" onClick={() => handleOpen()}>
              Comment
            </button>
            <button className={props.data.isCredit ? "btnGreen" : "btnRed"}>
              {props.data.isCredit ? "Incoming" : "Debit"}
            </button>
            <label className="btnYellow">
              {props.data.confirmations} Confirmations
            </label>
          </Box>
          <Box>
            <p>{props.data.comment}</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card;
