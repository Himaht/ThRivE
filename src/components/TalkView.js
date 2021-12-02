import React, { useState } from 'react'
import { Skeleton, Typography, Button, Dialog, Slide} from "@mui/material";
import logo from '../logo.svg';
import { Conversations } from "../data/Conversations";
import { Problems } from "../data/Problems";
import ReportDialog from "../components/ReportDialog";

function TalkView() {
    const [flowStarted, setFlowStarted] = useState(false)
    const [flowIndex, setFlowIndex] = useState(0)
    const [nextAsk, setNextAsk] = useState(0)
    const [ask, setAsk] = useState({})
    const [reportIsReady, setReportIsReady] = useState(false)
    const [activeProblems, setActiveProblems] = useState(Problems)
    const [reportDialogOpen, setReportDialogOpen] = useState(false)
    
    
    const conversationFlow = (points = 0, problems = [], key) => {
        console.log(`Point: ${ points }`);
        updatePoints(points, problems)

        switch(flowIndex) {
            case 0:
              introAsksFlow();
              break;
            case 1:
              feelingsAsksFlow();
              break;
            case 2:
              leadAsksFlow();
              break;
            case 3:
              followupAsksFlow();
              break;
            case 4:
              closingAsksFlow();
              break;
            default:
              feelingsAsksFlow();
              break;
          }
    };

    const introAsksFlow = () => {
        if (!(nextAsk + 1 > (Conversations.introAsks.length) )){
            setFlowStarted(true);
            setAsk(Conversations.introAsks[nextAsk]);
            console.log(Conversations.introAsks.length);
            if (!(nextAsk + 2 > (Conversations.introAsks.length))){
                setNextAsk(nextAsk + 1);
                console.log(nextAsk);
            } else {
                setFlowIndex(flowIndex + 1);
                setNextAsk(0);
            }
        }
    }

    const feelingsAsksFlow = () => {
        if (!(nextAsk + 1 > (Conversations.feelingsAsks.length) )){
            setAsk(Conversations.feelingsAsks[nextAsk]);
            console.log(`Length: ${ Conversations.feelingsAsks.length }`);
            if (!(nextAsk + 2 > (Conversations.feelingsAsks.length))){
                setNextAsk(nextAsk + 1);
                console.log(nextAsk);
            } else {
                setFlowIndex(flowIndex + 1);
                setNextAsk(0);
            }
        }
    }

    const leadAsksFlow = () => {
        if (!(nextAsk + 1 > (Conversations.leadAsks.length) )){
            setAsk(Conversations.leadAsks[nextAsk]);
            console.log(Conversations.leadAsks.length);
            if (!(nextAsk + 2 > (Conversations.leadAsks.length))){
                setNextAsk(nextAsk + 1);
                console.log(nextAsk);
            } else {
                setFlowIndex(flowIndex + 1);
                setNextAsk(0);
            }
        }
    };

    const followupAsksFlow = () => {
        if (!(nextAsk + 1 > (Conversations.followupAsks.length) )){
            setAsk(Conversations.followupAsks[nextAsk]);
            console.log(Conversations.followupAsks.length);
            if (!(nextAsk + 2 > (Conversations.followupAsks.length))){
                setNextAsk(nextAsk + 1);
                console.log(nextAsk);
            } else {
                setFlowIndex(flowIndex + 1);
                setNextAsk(0);
            }
        }
    };

    const closingAsksFlow = () => {
        if (!(nextAsk + 1 > (Conversations.closingAsks.length) )){
            setAsk(Conversations.closingAsks[nextAsk]);
            console.log(Conversations.closingAsks.length);
            if (!(nextAsk + 2 > (Conversations.closingAsks.length))){
                setNextAsk(nextAsk + 1);
                console.log(nextAsk);
            } else {
                generateReport()
            }
        }
    }

    const updatePoints = (points = 0, problems = []) => {
        // TODO: Check If point is not zero or problems is not empty then
        if(!(points === 0 || problems === [])) {
            // TODO: Spread array into mutable object
            let newProblems = [...activeProblems];
            // TODO: Update points with problem as key
            problems.map((problemKey, key) => {
                newProblems[problemKey].points = newProblems[problemKey].points + points;
                console.log(`Updated Points: ${newProblems[problemKey].points} `);
                return true
              });
            // TODO: Set state
            setActiveProblems(newProblems);
        }
        

    }
    const evaluateResponsesByPoints = () => {
        // TODO: Sort Problems By points in descending order
        console.log(activeProblems);
        activeProblems.sort(function(a, b){return b.points-a.points});
        console.log(activeProblems);
    }

    const generateReport = () => {
        if(reportIsReady){
            // TODO: Open Report Dialog
            setReportDialogOpen(true);
            console.log("Generating Report");
        } else {
            evaluateResponsesByPoints();
            setReportIsReady(true);
        }
        
    }

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
              (!flowStarted) ? conversationFlow() :
            (<div>                
                <Typography variant="h5">{ask.question}</Typography>

                <div style={{textAlign: "right", paddingRight: "10px", margin: "10px"}}>
                    { ask.responses.map((response) => (
                        <div>
                            <div style={{flexGrow: 9}} />
                            <Button onClick={() => conversationFlow(response.point, ask.problems)} color="primary" size="large" variant="outlined" style={{mt: 1, mb: 1}} >{response.answer}</Button>
                            <div style={{flexGrow: 1}} />
                        </div>
                    )) }
                </div>
            </div>)
          }
            <Dialog open={reportDialogOpen} fullScreen TransitionComponent={SlideTransition}>
              <ReportDialog setSettingsDialogOpen={setReportDialogOpen} activeProblems={activeProblems}/>
            </Dialog>
        </div>
    )
}

const SlideTransition = React.forwardRef(function TransitionComp(props, ref){
    return <Slide direction="up" ref={ref} {...props} />
})


export default TalkView
