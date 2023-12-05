import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountCircle, LogoutRounded } from "@mui/icons-material";

type Props = {
  clearToken: () => void;
};

const NavBar = ({ clearToken }: Props) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <AccountCircle />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Home
      </Typography>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          placeholder="Logout"
          onClick={clearToken}
          color="inherit"
        >
          <LogoutRounded />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export default NavBar;
