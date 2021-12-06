import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function ProblemCard({ problem }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ m: {xs: 1, sm: 5 } }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {problem.caption}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {problem.brief}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Button size="small">Learn More</Button>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Facts:</Typography>
          <Typography paragraph>
            <ul>
            {problem.summary.map((item, key) => {
                return ( <li key={key}>{item}</li> );
              })}
              </ul>
          </Typography>

          <Typography paragraph>Symptoms:</Typography>
          <Typography paragraph>
            <ul>
            {problem.symptoms.map((item, key) => {
                return ( <li key={key}>{item}</li> );
              })}
              </ul>
          </Typography>

          <Typography paragraph>Treatment:</Typography>
          <Typography paragraph>
            <ul>
            {problem.treatment.map((item, key) => {
                return ( <li key={key}>{item}</li> );
              })}
              </ul>
          </Typography>

          <Typography paragraph>Help:</Typography>
          <Typography paragraph>
            <ul>
            {problem.help.map((item, key) => {
                return ( <li key={key}>{item}</li> );
              })}
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProblemCard
