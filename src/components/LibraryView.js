import React, {useState} from 'react'
import { Problems } from "../data/Problems";
// import { Button, TextField, Typography} from "@material-ui/core";
import ProblemCard from "../components/ProblemCard";

function LibraryView() {
    const [searchTerm, setSearchTerm] = useState("");

    // Create @mui/material mobile responsive styles for the search bar with light color that blend in with the background and design
    const searchBarStyle = {
        backgroundColor: "white",
        padding: "10px",
        margin: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1976d2",
    };

    //filter problems by caption containing the search term
    const filteredProblems = Problems.filter(problem => problem.caption.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <div className="search-bar">
                <input
                    autoFocus
                    margin="dense"
                    id="search-bar"
                    fullWidth
                    variant="standard"
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search"
                    label="search"
                    style={searchBarStyle}
                />
            </div>
            <div className="problem-list">
                {filteredProblems.map((problem) => (
                    <ProblemCard
                        key={problem.id}
                        problem={problem}
                    />
                ))}
            </div>
        </div>
    )
}

export default LibraryView
