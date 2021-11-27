import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Dialog, Slide, AppBar } from '@material-ui/core'
import { Assistant, Dashboard, Bookmark, Settings } from "@material-ui/icons"

import SettingsDialog from "../components/SettingsDialog";

const SlideTransition = React.forwardRef(function TransitionComp(props, ref){
    return <Slide direction="up" ref={ref} {...props} />
})


function BottomNav({ value, onChange }) {
    
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
                <BottomNavigationAction label="Records" icon={<Bookmark />}/>
                <BottomNavigationAction label="Settings" icon={<Settings />} onClick={() => setDialogOpen(true)} />
            </BottomNavigation>
        </AppBar>
            <Dialog open={dialogOpen} fullScreen TransitionComponent={SlideTransition}>
                <SettingsDialog setSettingsDialogOpen={setDialogOpen}/>
            </Dialog>
        </div>
    )
}

export default BottomNav
