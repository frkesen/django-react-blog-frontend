import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  accountCircle: {
    marginLeft: 5,
  },
}));

function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  const anchorEl = true;
  const currentUser = false;
  const open = Boolean(anchorEl);
  const handleMenu = () => {
    
  };

  const handleHomeClick = useCallback(() => {
    history.push(`/`);
  }, []);

  const handleClose = useCallback(() => {
    
  }, []);

  const handleSignOut = useCallback(() => {
    
  }, []);

  const handleLoginClick = () => {
    history.push(`/login`);
  };

  const handleRegisterClick = () => {
    history.push(`/register`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleHomeClick}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Awesome Blog
          </Typography>
          {currentUser ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {currentUser?.displayName}
                <AccountCircle className={classes.accountCircle} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <MenuItem onClick={handleLoginClick}>LOGIN</MenuItem>
              <MenuItem onClick={handleRegisterClick}>REGISTER</MenuItem>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
