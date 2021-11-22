import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Assistant, Dashboard, Bookmark, Settings } from "@material-ui/icons"

function BottomNav({ value, onChange }) {
    return (
        <BottomNavigation showLabels value={value} onChange={(e, tab) => onChange(tab)}>
            <BottomNavigationAction label="Talk" icon={<Assistant />}/>
            <BottomNavigationAction label="Library" icon={<Dashboard />}/>
            <BottomNavigationAction label="Records" icon={<Bookmark />}/>
            <BottomNavigationAction label="Settings" icon={<Settings />}/>
        </BottomNavigation>
    )
}

export default BottomNav
