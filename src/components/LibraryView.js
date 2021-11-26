import React from 'react'
import { Problems } from "../data/Problems";
import { Button, TextField, Typography} from "@material-ui/core";

function LibraryView() {
    return (
        <div>
            {Problems.map((problem, key) => {
          return (
            <div key={key}>
            <Typography variant="h6" color="inherit" component="div">{problem.caption}</Typography>
            <Typography variant="p" color="inherit" component="div">{problem.brief}</Typography>
            </div>
          );
        })}
        </div>
    )
}

export default LibraryView
