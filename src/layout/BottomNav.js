import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Home, Dashboard, Bookmark, Settings } from "@material-ui/icons"

function BottomNav({ value, onChange }) {
    return (
        <BottomNavigation value={value} onChange={(e, tab) => onChange(tab)}>
            <BottomNavigationAction icon={<Home />}/>
            <BottomNavigationAction icon={<Dashboard />}/>
            <BottomNavigationAction icon={<Bookmark />}/>
            <BottomNavigationAction icon={<Settings />}/>
        </BottomNavigation>
    )
}

export default BottomNav
