import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0.1px solid #000",
  borderRadius: "10px",
  p: 4,
};

export default function BasicModal({ open, handleOpen, handleClose }) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4>Hi you are about to drop a comment for the details below</h4>
          <h2>$500 with Transaction Id: #95858585y280</h2>
          <Box sx={{ width: "100%" }}>
            <textarea
              placeholder="Use this format: Your name, comment"
              style={{ height: "100px", width: "100%" }}
            />
            <button className="btnCopy" style={{ marginTop: "10px" }}>
              Send Comment
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
