import React, { useState } from 'react';
import {BottomNavigation, BottomNavigationAction, Dialog, Slide, AppBar, SwipeableDrawer} from '@material-ui/core'
import { Assistant, Dashboard, Bookmark, Settings } from "@material-ui/icons"

import SettingsDialog from "../components/SettingsDialog";
import RecordsDrawer from "../components/RecordsDrawer";

const SlideTransition = React.forwardRef(function TransitionComp(props, ref){
    return <Slide direction="up" ref={ref} {...props} />
})


function BottomNav({ value, onChange }) {
    const [recordsDrawerOpen, setRecordsDrawerOpen] = useState(false)
    
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <div>
        <AppBar position="fixed" color="default" style={{top: "auto", bottom: 0}}>
            <BottomNavigation showLabels value={value} onChange={(e, tab) => onChange(tab)} 
            sx={{
                display: { xs: 'block', sm: 'none' }
              }}>
                <BottomNavigationAction label="Talk" icon={<Assistant />}/>
                <BottomNavigationAction label="Library" icon={<Dashboard />}/>
                <BottomNavigationAction label="Records" icon={<Bookmark />} onClick={() => setRecordsDrawerOpen(!recordsDrawerOpen)} />
                <BottomNavigationAction label="Settings" icon={<Settings />} onClick={() => setDialogOpen(true)} />
            </BottomNavigation>
        </AppBar>
            <Dialog open={dialogOpen} fullScreen TransitionComponent={SlideTransition}>
                <SettingsDialog setSettingsDialogOpen={setDialogOpen}/>
            </Dialog>
            <SwipeableDrawer anchor={'right'} open={recordsDrawerOpen} onClose={() => setRecordsDrawerOpen(false)} onOpen={() => setRecordsDrawerOpen(true)} disableSwipeToOpen={false} PaperProps={{style: {minWidth: "50vw"}}}>
                <RecordsDrawer setRecordsDrawerOpen={setRecordsDrawerOpen} />
            </SwipeableDrawer>
        </div>
    )
}

export default BottomNav
