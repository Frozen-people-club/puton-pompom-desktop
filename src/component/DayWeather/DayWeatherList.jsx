import React, { Component } from 'react';
import DayWeatherItem from './DayWeatherItem';

class DayWeatherList extends Component {
    constructor(props) {
        super(props);
        this.getTime = this.getTime.bind(this);
            this.state = {
            data: this.props.data
        }
    }
    getTime = (date, timezone) =>{
        let dayHour = +date.slice(0, 2);
        let time_zone = new Date().getTimezoneOffset()/ 60;
        dayHour= dayHour + timezone/3600 + time_zone;
        if (dayHour < 0){
            dayHour = 24 + dayHour;
        }
        else if (dayHour >=24) {
            dayHour = dayHour - 24;
        }
        let cur_hours = (dayHour / 10 < 1) ? ("0" + dayHour.toString()) :dayHour;
        return cur_hours+':00';
    }
    render() {


        let list = [];
        for (let i = 0; i < this.props.data.length; i++)
            list.push(<DayWeatherItem temp={this.props.data[i].temperature} date={this.props.data[i].dt_txt} icon={this.props.data[i].icon} time = {this.getTime(this.props.data[i].dt_txt, this.props.timezone)}/>);
        return (
            <div className="dayWeatherList">
                <div className ="dayWeatherList__title">Daily forecast</div>
                <div className="dayWeatherList__items">{list}</div>
            </div>
        )
    }
}

export default DayWeatherList;