import React, { useState } from 'react';
import { AppBar, Avatar, Toolbar, IconButton, Typography, SwipeableDrawer, Dialog, Slide } from '@material-ui/core';
import { ArrowBackIos, Policy} from "@material-ui/icons";

const SlideTransition = React.forwardRef(function TransitionComp(props, ref){
    return <Slide direction="up" ref={ref} {...props} />
})


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  
function stringAvatar(name) {
    name = (name === "") ? "Guest": name; 

    let nameSplit = (name.split(' ').length > 1) ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`: `${name.split(' ')[0][0]}`;

    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: nameSplit,
    };
  }

  function getUsername() {
    let name = (localStorage.getItem("username") === null) ? "Guest": localStorage.getItem("username"); 
    return name;
  }

function TopNav() {
    const [open, setOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <IconButton color="inherit" onClick={() => setOpen(!open)}>
                    <Policy />
                    <Typography variant="h6" color="inherit" component="div">
                        ThRivE
                    </Typography>
                </IconButton>
                <div style={{flexGrow: 1}} />
                <Avatar color="inherit" onClick={() => setDialogOpen(true)} {...stringAvatar(getUsername())} />
            </Toolbar>
            <SwipeableDrawer open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} disableSwipeToOpen={false} PaperProps={{style: {minWidth: "50vw"}}}>
                <h1>Hello</h1>
            </SwipeableDrawer>
            <Dialog open={dialogOpen} fullScreen TransitionComponent={SlideTransition}>
                <div>
                <IconButton color="inherit" onClick={() => setDialogOpen(false)}>
                    <ArrowBackIos />
                    <Typography variant="h6" color="inherit" component="div">
                        Settings
                    </Typography>
                </IconButton>
                <div style={{flexGrow: 1}} />
                </div>
            <h1>Hello</h1>
            </Dialog>
        </AppBar>
    )
}

export default TopNav
