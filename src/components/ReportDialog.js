import { Button, DialogActions, DialogTitle, AppBar, Toolbar, IconButton, Typography, FormLabel, DialogContent, DialogContentText } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

import ProblemCard from "../components/ProblemCard";

function getUsername() {
  let name = (localStorage.getItem("username") === null) ? "Guest": localStorage.getItem("username"); 
  return name;
}

function ReportDialog({ setReportDialogOpen, activeProblems }) {

  const handleClose = () => {
    setReportDialogOpen(false)
  };

  return (
    <div>
      <AppBar position="static" color="default">
            <Toolbar>
                <IconButton color="inherit" onClick={() => setReportDialogOpen(false)}>
                    <ArrowBackIos />
                    <Typography variant="h6" color="inherit" component="div">
                    {getUsername()}'s Report
                    </Typography>
                </IconButton>
                <div style={{flexGrow: 1}} />
            </Toolbar>
        </AppBar>

          <DialogTitle> <Typography variant="h4"> Feeling worried?  </Typography> </DialogTitle>
          <DialogContent>
          <DialogContentText>
          <Typography variant="h5" color="inherit" component="span">
          Don't hesitate to seek care, you should consult your doctor for further assessment and advice 
          </Typography>
          </DialogContentText>
          <Typography variant="h5" color="inherit" component="span">
          Possible Issues:
          </Typography>
          <div>                
                {activeProblems.filter(problem => problem.points >= 1).map((problem, key) =>  {
                  return (
                    <div key={key}>
                        <ProblemCard problem={problem}/>
                    </div>
                  );
                })}
            </div>
        </DialogContent>        

        <DialogActions>
          <Button onClick={handleClose} color="primary" size="large" variant="outlined">Close</Button>
        </DialogActions>
        <FormLabel><br/>...<br/></FormLabel>
    </div>
  );
}

export default ReportDialog;                  
