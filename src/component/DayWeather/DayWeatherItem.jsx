import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

class DayWeatherItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: this.props.temp,
            icon: this.props.icon,
            date: this.props.date
        }
    }
    iconInterface = (icon) => {
        switch(icon){
            case 'o1d':
                return 'CLEAR_DAY';
                break;
            case '01n':
                return 'CLEAR_NIGHT';
                break;
            case '03d':
                return 'PARTLY_CLOUDY_DAY';
                break;
            case '03n':
                return 'PARTLY_CLOUDY_NIGHT';
                break;
            case '04d':
                return 'CLOUDY';
                break;
            case '04n':
                return 'CLOUDY';
                break;
            case '09d':
                return 'RAIN';
                break;
            case '09n':
                return 'RAIN';
                break;
            case '10d':
                return 'RAIN';
                break;
            case '10n':
                return 'RAIN';
                break;
            case '11d':
                return 'RAIN';
                break;
            case '11n':
                return 'RAIN';
                break;
            case '13d':
                return 'SNOW';
                break;
            case '13n':
                return 'SNOW';
                break;
            case '50d':
                return 'FOG';
                break;
            case '50n':
                return 'FOG';
                break;
            default:
                return 'CLEAR_DAY';

        }
}
    render() {
        return (
            <div className="dayWeatherItem">
                <div className="dayWeatherItem__date">
                    {this.props.time}
                </div>
                <div className="dayWeatherItem__icon">
                    <ReactAnimatedWeather
                        icon={this.iconInterface(this.props.icon)}
                        color={'#b784b3'}
                        size={28}
                        animate={true}
                    />
                </div>
                <div className="dayWeatherItem__temp">
                    {this.props.temp}°
                </div>
            </div>
        )
    }
}

export default DayWeatherItem;