import { useState } from 'react'
import './App.css';
import { CssBaseline, Grid } from "@material-ui/core"
import TopNav from "./layout/TopNav"
import Content from "./layout/Content"
import BottomNav from "./layout/BottomNav"


const containerStyles = {
  height: "calc(100vh - 112px)",
  overflow: "auto",
  textAlign: "center"
}

function App() {
  const [tab, setTab] = useState(0);

  function renderView() {
    switch(tab) {
      case 0:
        return <Content caption={"Let's talk"} />;
      case 1:
        return <Content caption={"Library"} />;
      case 2:
        return <Content caption={"Bookmark"} />;
      case 3:
        return <Content caption={"Settings"} />;
      default:
        return new Error("This view does not Yet, Are you from the future?");


    }
  }
  return (
    <div className="App">
      <Grid container direction="column">
        <TopNav />
        <div style={containerStyles}>
          {renderView()}
        </div>
        <BottomNav value={tab} onChange={setTab} />
      </Grid>
      <CssBaseline />
    </div>
  );
}

export default App;
