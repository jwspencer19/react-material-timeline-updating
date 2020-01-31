import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

// Note: needed to create a class component and not use hooks since
// there is a bug in react when trying to create a timer (setInterval)
// when using hooks. The workaround here is to create a class component.
class TimerButton extends Component {
  state = {
    timerValue: null
  };


  handleTimer = () => {
    let myTimerVal;

    if (!this.state.timerValue) {
//      console.log("handleTimer - start timer");
      myTimerVal = setInterval(() => {
        this.props.handleIncrement();
      }, 5000);
      this.setState({timerValue: myTimerVal});
    } else {
//      console.log("handleTimer - stop timer");
      clearInterval(this.state.timerValue);
      this.setState({timerValue: null});
    }

  }

  render() {
    return <Button color="inherit" onClick={this.handleTimer}>{this.state.timerValue ? 'Stop Timer' : 'Start Timer'}</Button>;
  }
}

export default TimerButton;