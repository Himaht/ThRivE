import React from 'react'
import { AppBar, Avatar, Toolbar } from '@material-ui/core'

function TopNav() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Avatar>RH</Avatar>
            </Toolbar>
        </AppBar>
    )
}

export default TopNav
