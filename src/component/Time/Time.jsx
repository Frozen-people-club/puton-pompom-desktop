import React, {Component} from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            let date = new Date().getHours() * 60;
            let min = new Date().getMinutes();
            let time_zone = new Date().getTimezoneOffset();
            let currentTime = date + min + time_zone;
            let currentHour = Math.floor(currentTime / 60);
            let currentMin = currentTime % 60;
            let timezone = this.props.timezone / 3600;
            currentHour = currentHour + timezone;
            if (currentHour >= 24 ) {
                currentHour = currentHour  - 24;
            }
            else if (currentHour < 0) {
                currentHour = 24 + currentHour;
            }
            if (currentMin < 0 ) {
                currentMin = currentMin + 60;
            } 
            let cur_hours = (currentHour / 10 < 1) ? ("0" + currentHour.toString()) : currentHour;
            let cur_min = (currentMin / 10 < 1) ? ("0" + currentMin.toString()) : currentMin;
            this.setState({
                date: cur_hours + ':' + cur_min
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <>{this.state.date}</>
        )
    }
}

export default Time;