import React from 'react'
import { Problems } from "../data/Problems";
// import { Button, TextField, Typography} from "@material-ui/core";
import ProblemCard from "../components/ProblemCard";

function LibraryView() {
    return (
        <div>
            {Problems.map((problem, key) => {
          return (
            <div key={key}>
                <ProblemCard caption={problem.caption} brief={problem.brief} summary={problem.summary} symptoms={problem.symptoms} treatment={problem.treatment} help={problem.help}/>
            </div>
          );
        })}
        </div>
    )
}

export default LibraryView
