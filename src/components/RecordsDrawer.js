import { Button, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import {ArrowBackIos, OpenInBrowser} from "@material-ui/icons";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import {useEffect, useState} from "react";

function getUsername() {
    let name = (localStorage.getItem("username") === null) ? "Guest": localStorage.getItem("username");
    return name;
}

function RecordsDrawer({ setRecordsDrawerOpen }) {
    const [records, setRecords] = useState([]);

    // get records from local storage
    useEffect(() => {
        let records = JSON.parse(localStorage.getItem("records")) || [];
        console.log(records);
        setRecords(records);
    }, []);

    const handleClose = () => {
        setRecordsDrawerOpen(false)
    };

    // return records list of record if any else return There are no records yet
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <ArrowBackIos />
                    </IconButton>
                    <Typography variant="h6" className="title">
                        {getUsername()}'s Records
                    </Typography>
                </Toolbar>
            </AppBar>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Records
                    </Typography>
                    <Typography variant="body2" component="div">
                        {records.length === 0 ? "There are no records yet" : ""}
                    </Typography>
                    {records.map((record, index) => {
                        return (
                            <div key={index}>
                                <Card sx={{ m: {xs: 1, sm: 5 } }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {
                                                new Date(record.date).getFullYear()
                                            }/{
                                                new Date(record.date).getMonth()
                                            }/{
                                                new Date(record.date).getDay()
                                            } at {
                                                new Date(record.date).getHours()
                                            }:{
                                                new Date(record.date).getMinutes()
                                            }:{
                                                new Date(record.date).getSeconds()
                                        }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {record.problems.filter(problem => problem.points >= 1).length} possible issues
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="open in browser" href={record.url} target="_blank">
                                            <Button size="small" color="primary" href={record.url}>
                                                Open Record
                                                <OpenInBrowser />
                                            </Button>
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    })}
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleClose}>
                        Close
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default RecordsDrawer;
