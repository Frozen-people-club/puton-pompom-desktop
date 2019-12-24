import React, {Component} from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import Time from './Time/Time'

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="currentWeather">
                <div className='currentWeather__date'>
                    <Time timezone = {this.props.timezone}/>
                </div>
                <div className="background__1">
                    <div className="currentWeather__img">
                        <img className={`currentWeather__img__clothes ${this.props.clothes}`} src={require(`../img/${this.props.clothes}.png`)}
                             alt='avocado'/>
                    </div>
                </div>
                <div className='currentWeather__weather'>
                    <div className='currentWeather__description'>
                        {this.props.description}
                    </div>
                    <div className='currentWeather__temp'>
                        {this.props.temp}°
                    </div>
                </div>
                <div className='currentWeather__icon-weather'>
                    <ReactAnimatedWeather
                        icon={this.props.icon}
                        color={'#F9E7F1'}
                        size={60}
                        animate={true}
                    />
                </div>
                <div className='currentWeather__city'>
                    <img className='currentWeather__city__img' src={require('../img/Ellipse 2.svg')}/>
                    <div className='currentWeather__city__name'>
                        {this.props.city}
                    </div>
                </div>
            </div>

        )
    }
}

export default CurrentWeather;