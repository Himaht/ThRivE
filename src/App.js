import React, { useState, useEffect } from 'react'
import './App.css';
import { CssBaseline, Grid, Box } from "@material-ui/core"
import TopNav from "./layout/TopNav"
import Content from "./layout/Content"
import BottomNav from "./layout/BottomNav"
import ResponsiveDrawer from "./layout/SideNav"
import StartupDialog from "./components/StartupDialog"
import TalkView from "./components/TalkView"
import LibraryView from "./components/LibraryView"


const containerStyles = {
  overflow: "auto"
}

const drawerWidth = 240;

function App(props) {
  const [tab, setTab] = useState(0);
  const [username, setUsername] = useState("");
  const [startupDialogOpen, setStartupDialogOpen] = useState(false);

  useEffect(
    () => {
      if (!(username === "")) {
        localStorage.setItem('username', username);
      }
      console.log(username);
    }, [username]
  );

  function renderStartupView() {
    if(startupDialogOpen === false){
      if (localStorage.getItem("username") === null) {
        setStartupDialogOpen(true);
      } else {
        if (!(username === "")) {
          setUsername(localStorage.getItem("username"))
          console.log(username);
        }
        
      }
    }
    return <StartupDialog isOpen={startupDialogOpen} setupUsername={setUsername}/>
  }

  function renderView() {
    switch(tab) {
      case 0:
        return (
          <div>
            <TalkView />
          </div>
        );

      case 1:
        return (
          <div>
            <LibraryView />
          </div>
        );
      case 2:
        return <Content caption={"Records"} />;
      case 3:
        setTab(0)
        return <Content caption={"Let's talk"} />;
        
      default:
        setTab(0)
        return <Content caption={"Let's talk"} />;
    }
  }

 
  return (
    <Box >
        <div className="App">
          <Grid container direction="column">
            <TopNav />
            <ResponsiveDrawer />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: 5, mb: 5,
              ml: { sm: `${drawerWidth}px` }}}            > 
             <div style={containerStyles}>
              {renderView()}
              {renderStartupView()}
            </div>
            </Box>
            
            <BottomNav value={tab} onChange={setTab} />
            
          </Grid>
          <CssBaseline />
        </div>

      </Box>
    
  );
}

export default App;
