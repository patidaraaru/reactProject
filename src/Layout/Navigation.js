import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import LoginModal from "../Component/LoginModal"



const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const DrawerContent = (
    <Box
      sx={{ width: 250, height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <NavBar />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                {/* <img src={CustomLogo} alt="logo" style={{ width: "100px" }} /> */}
                <Typography variant="h5">Logo</Typography>
              </Link>
            </Box>
            <Button   variant="inherit" onClick={() => setOpen(true)}>
              Login
            </Button>
            <Button color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {DrawerContent}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
      <LoginModal open={open} setOpen={setOpen} />
    </>
   
  );
};

export default Navigation;
