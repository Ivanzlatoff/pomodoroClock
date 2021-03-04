import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }
        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        this.props.onPlayTimer()
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.setState({
            intervalId: intervalId
        })
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onStopTimer();
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.setState({
            timerSecond: 0,
            isSession: true
        });
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                            timerSecond: 60,
                        });

                        this.props.toggleInterval(this.state.isSession);

                    } else {
                        this.setState({
                            isSession: true,
                            timerSecond: 60
                        });

                        this.props.toggleInterval(this.state.isSession)
                    }
                } else {
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 60
                    })
                }

            default:
            if (this.props.breakLength > 0 || this.props.sessionLength > 0) {
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    };
                });
            } else {
                this.stopTimer()
                 this.setState((prevState) => {
                    return {
                        timerSecond: 0
                    };
                });
            }
            break;
        }
    }

    render() {
        return (
            <section>
                <section className="timer-container">
                    <h4 id="timer-label">{this.state.isSession === true ? "Session" :
                    "Break"}</h4>
                    <div id="time-left">
                        <span className="timer">{this.props.timerMinute}</span>
                        <span className="timer">:</span>
                        <span className="timer">
                            {this.state.timerSecond === 0
                                ? "00"
                                : this.state.timerSecond < 10
                                ? "0" + this.state.timerSecond
                                : this.state.timerSecond}
                        </span>
                    </div>
                </section>
                <section className="timer-actions">
                    <button onClick={this.playTimer} id="start_stop">Play</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.resetTimer} id="reset">Refresh</button>
                </section>
            </section>
        )
    }
}

export default Timer;
