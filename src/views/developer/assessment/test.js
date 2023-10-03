import React from 'react';

class Time extends React.Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 20 };
        this.timer = 0;
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        if (localStorage.getItem("timer")){
            this.setState({ seconds: localStorage.getItem("timer") });
            let timeLeftVar = this.secondsToTime(localStorage.getItem("timer") );
            this.setState({ time: timeLeftVar });
        }else{
            let timeLeftVar = this.secondsToTime(this.state.seconds);
            this.setState({ time: timeLeftVar });
        }

    }

    startTimer=()=> {
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    };

    countDown=()=> {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        localStorage.setItem("timer",seconds);
        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            localStorage.removeItem('timer');
            window.location.reload()
        }
    };

    render() {
        return(
            <div>
                <button onClick={this.startTimer}>Start</button>
                m: {this.state.time.m} s: {this.state.time.s}



                <h1>Countdown Clock</h1>
                <div id="clockdiv">
                    <div>
                        <span className="days"></span>
                        <div className="smalltext">Days</div>
                    </div>
                    <div>
                        <span className="hours"></span>
                        <div className="smalltext">Hours</div>
                    </div>
                    <div>
                        <span className="minutes"></span>
                        <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                        <span className="seconds"></span>
                        <div className="smalltext">Seconds</div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Time;