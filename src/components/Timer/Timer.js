/** Modules */
import React, { Component } from 'react';
import styled from 'styled-components';

const TimerStyle = styled.div`
    font-weight: bold;
    font-size: ${props => props.theme.fontSize.hg};
`

const TimerElement = ({ children }) => (
    <TimerStyle>
        {children}
    </TimerStyle>
)

class Timer extends Component {
    constructor() {
        super();

        this.state = {
            time: {},
            seconds: 120
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });

        this.startTimer()
    }

    componentDidUpdate() {
        const { state, props: { endTime } } = this;

        if (+state.seconds === 0) {
            endTime()
        }
    }

    secondsToTime(secs) {
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        if (minutes < 10) {
            minutes = `0${minutes}`
        }

        if (seconds < 10) {
            seconds = `0${seconds}`
        }

        let obj = {
            "m": minutes,
            "s": seconds
        };

        return obj;
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {

            clearInterval(this.timer);
        }
    }

    render() {
        const { state, props: { endTime } } = this;

        return (
            <TimerElement id="testTimer" endTime={endTime}>
                {state.time.m}:{state.time.s}
            </TimerElement>
        );
    }
}

export default Timer;