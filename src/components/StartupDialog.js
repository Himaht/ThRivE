import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide,  AppBar, Toolbar, IconButton, Typography, FormLabel } from "@material-ui/core";
import { Policy } from "@material-ui/icons";

const SlideTransition = React.forwardRef(function TransitionComp(props, ref){
    return <Slide direction="up" ref={ref} {...props} />
})

function StartupDialog({ isOpen, setupUsername }) {
  const [open, setOpen] = useState(isOpen);
  const [input, setInput] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setupUsername(input)
    console.log("This is the User: "+ input);
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={SlideTransition}>
      <AppBar position="static" color="default">
            <Toolbar>
                <IconButton color="inherit">
                    <Policy />
                    <Typography variant="h6" color="inherit" component="div">
                        ThRivE
                    </Typography>
                </IconButton>
                <div style={{flexGrow: 1}} />
            </Toolbar>
        </AppBar>
        <DialogTitle>...</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Welcome to ThRivE. I'm here to help provide you mental health guidance as easy as possible. 
          <Typography variant="h6" color="inherit" component="span">
            Let's get started
          </Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            value={input}
            onChange={ (e) => setInput(e.target.value)}

          />
          <FormLabel>NB: Needed for Identifying you and your records. Hence, personalizing your experience on ThRivE <br/>
        </FormLabel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" size="large" variant="outlined">Get Started</Button>
        </DialogActions>
        <FormLabel><br/>...<br/></FormLabel>
      </Dialog>
    </div>
  );
}

export default StartupDialog;
