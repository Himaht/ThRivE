import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Dialog, Slide } from '@material-ui/core'
import { Assistant, Dashboard, Bookmark, Settings } from "@material-ui/icons"

import SettingsDialog from "../components/SettingsDialog";

const SlideTransition = React.forwardRef(function TransitionComp(props, ref){
    return <Slide direction="up" ref={ref} {...props} />
})


function BottomNav({ value, onChange }) {
    
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <div>
            <BottomNavigation showLabels value={value} onChange={(e, tab) => onChange(tab)}>
                <BottomNavigationAction label="Talk" icon={<Assistant />}/>
                <BottomNavigationAction label="Library" icon={<Dashboard />}/>
                <BottomNavigationAction label="Records" icon={<Bookmark />}/>
                <BottomNavigationAction label="Settings" icon={<Settings />} onClick={() => setDialogOpen(true)} />
            </BottomNavigation>
            <Dialog open={dialogOpen} fullScreen TransitionComponent={SlideTransition}>
                <SettingsDialog setSettingsDialogOpen={setDialogOpen}/>
            </Dialog>
        </div>
    )
}

export default BottomNav
