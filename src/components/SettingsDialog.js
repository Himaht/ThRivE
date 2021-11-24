import { Button, DialogActions, DialogTitle, AppBar, Toolbar, IconButton, Typography, FormLabel, Avatar } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

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

function SettingsDialog({ setSettingsDialogOpen }) {

  const handleClose = () => {
    setSettingsDialogOpen(false)
  };

  const handleResetAccount = () => {
    localStorage.clear();
    console.log("Reset Account");
    setSettingsDialogOpen(false)
    window.location.reload(false);
  };
  return (
    <div>
      <AppBar position="static" color="default">
            <Toolbar>
                <IconButton color="inherit" onClick={() => setSettingsDialogOpen(false)}>
                    <ArrowBackIos />
                    <Typography variant="h6" color="inherit" component="div">
                        Settings
                    </Typography>
                </IconButton>
                <div style={{flexGrow: 1}} />
            </Toolbar>
        </AppBar>
        <div>
            <Toolbar>
              <Avatar color="inherit" {...stringAvatar(getUsername())} />
              <DialogTitle> {getUsername()} </DialogTitle>
                <div style={{flexGrow: 1}} />
            </Toolbar>
        
        </div>
        <DialogActions>
          <Button onClick={handleClose} color="primary" size="large" variant="outlined">Close</Button>
          <Button onClick={handleResetAccount} style={{backgroundColor: '#CE1126', color: '#FFFFFF'}} size="large" variant="contained">Reset Account</Button>
        </DialogActions>
        <FormLabel><br/>...<br/></FormLabel>
    </div>
  );
}

export default SettingsDialog;                  
