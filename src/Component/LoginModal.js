import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const LoginModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log("User Name:", user);
    console.log("Password:", password);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={HandleSubmit}>
          <Box className="InputBox">
            <Typography component="label" htmlFor="UserName">
              User Name
            </Typography>
            <input
              type="text"
              placeholder="Enter your name"
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
            />
          </Box>

          <Box className="InputBox" sx={{ padding: "15px 0px" }}>
            <Typography component="label" htmlFor="password">
              Password
            </Typography>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Box>

          <button type="submit" className="TheamBtn">
            Submit
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
