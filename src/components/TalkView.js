import React, { useState } from 'react'
import { Skeleton, Typography, Button} from "@mui/material";
import logo from '../logo.svg';
// import { Skeleton, Typography, loading } from "@material-ui/core";
// import { Policy } from "@material-ui/icons";

function getFirstName() {
    let name = (localStorage.getItem("username") === null) ? "Guest": localStorage.getItem("username"); 
    let firstName = (name.split(' ').length > 1) ? `${name.split(' ')[0]}`: `${name}`;
    return firstName;
  }

function TalkView() {
    const [sayIntro, setSayIntro] = useState(true)
    const [introduction, setIntroduction] = useState({
        question: "Hello "+ getFirstName()+", I am your mental health companion. always here to help you thrive",
        responses: [
            { answer: "okay, Let's Talk", point: 1, problems: [] }
        ]
    })
    const [ask, setAsk] = useState({
        question: "How are you feeling?",
        responses: [
            { answer: "Happy", point: 1, problems: [] },
            { answer: "Very Fine", point: 1, problems: [] },
            { answer: "Okay", point: 1, problems: [] },
            { answer: "Tired", point: 2, problems: [] },
            { answer: "Stressed", point: 2, problems: [] },
            { answer: "Sad", point: 2, problems: [] }
        ]
    })
    const Logo = {
        title: "Thrive Logo",
        src: logo
    }
    return (
        <div>
            {
                logo ? (
                    <img
                    style={{
                        width: 128,
                        height: 128,
                    }}
                    alt={Logo.title}
                    src={Logo.src}
                    />
                ) : (
                    <Skeleton variant="circular" width={128} height={128} />
                )
            }
            
          {
              sayIntro ? (
                  <div>
                    <Typography variant="h5">{introduction.question}</Typography>
  
                    <div style={{textAlign: "right", padding: "10px"}}>
                        { introduction.responses.map((response) => (
                            <div>
                                <div style={{flexGrow: 8}} />
                                <Button onClick={() => setSayIntro(false)} color="primary" size="large" variant="outlined">{response.answer}</Button>
                                <div style={{flexGrow: 2}} />
                            </div>
                        )) }
                    </div>
                  </div>
                
              ) : (
                <div>                
                    <Typography variant="h5">{ask.question}</Typography>
    
                    <div style={{textAlign: "right", padding: "10px"}}>
                        { ask.responses.map((response) => (
                            <div>
                                <div style={{flexGrow: 8}} />
                                <Button color="primary" size="large" variant="outlined">{response.answer}</Button>
                                <div style={{flexGrow: 2}} />
                            </div>
                        )) }
                    </div>
                </div>
              )
          }
            
        </div>
    )
}

export default TalkView
