import React, {Component} from 'react';

class DayWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: this.props.city,
            temp: this.props.temp, 
            hours: this.props.hours,
            data: ['00:00', '03:00','06:00','09:00','12:00',
            '15:00', '18:00', '21:00']
        }
    }

    componentWillMount() {
    }
    
      render() {
        return ( 
        <div className="dayWeather">
            <div className='dayWeather__title'>
                {this.props.title}
            </div>
            <ul>
            </ul>
        </div>
        )
      }
}

export default DayWeather;