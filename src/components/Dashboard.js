import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../components/ButtonAppBar'
import TemporaryDrawer from '../components/TemporaryDrawer';
import Timeline from '../components/Timeline';
import timeLineData from './data'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));


const Dashboard = ( props ) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [outcomes, setOutcomes] = useState(timeLineData);

  const handleDrawerOpen = () => {
    setOpen(true);
//    console.log("handleDrawerOpen");
  };
  const handleDrawerClose = () => {
    setOpen(false);
//    console.log("handleDrawerClose");
  };

  const handleIncrement = () => {
//    console.log("handleIncrement");
    let outcomesCopy = [...outcomes];
    const firstItem = outcomesCopy.shift();
    outcomesCopy.push(firstItem);
//    console.log(outcomesCopy);
    setOutcomes(outcomesCopy);
  }

  return (
    <React.Fragment>
      <ButtonAppBar drawHandlerOpen={handleDrawerOpen} drawHandlerClose={handleDrawerClose} handleIncrement={handleIncrement} />
      <TemporaryDrawer drawHandlerOpen={handleDrawerOpen} drawHandlerClose={handleDrawerClose} drawState={open}/>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid item xs={12}>
            <Timeline outcomes={outcomes}/>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
};

export default Dashboard;
