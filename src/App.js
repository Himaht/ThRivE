import { useState, useEffect } from 'react'
import './App.css';
import { CssBaseline, Grid } from "@material-ui/core"
import TopNav from "./layout/TopNav"
import Content from "./layout/Content"
import BottomNav from "./layout/BottomNav"
import StartupDialog from "./components/StartupDialog"


const containerStyles = {
  height: "calc(100vh - 112px)",
  overflow: "auto",
  textAlign: "center"
}

function App() {
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
        return <Content caption={"Let's talk"} />;
      case 1:
        return <Content caption={"Library"} />;
      case 2:
        return <Content caption={"Bookmark"} />;
      case 3:
        setTab(0)
        return <Content caption={"Let's talk"} />;
        
      default:
        setTab(0)
        return <Content caption={"Let's talk"} />;
    }
  }

  return (
    <div className="App">
      <Grid container direction="column">
        <TopNav />
        <div style={containerStyles}>
          {renderView()}
          {renderStartupView()}
        </div>
        <BottomNav value={tab} onChange={setTab} />
        
      </Grid>
      <CssBaseline />
    </div>
  );
}

export default App;
