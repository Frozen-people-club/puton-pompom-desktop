import React, {Component} from 'react';
import Button from "../Button/Button"
import Time from "../Time/Time";
var icon = require('../../img/Calendar.svg');

class Clothes extends Component {
    render() {

        var today = new Date().getDate();
        let month_id = new Date().getMonth();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', ' December'];
        let curr_month = months[month_id];

        return (
            <div className="Calendar">
                <div className="Calendar__icon">
                    <img src={icon} alt={'Calendar'} />
                </div>
                <div className="Calendar__wrapper">
                    <div className="Calendar__time">
                        <Time timezone = {this.props.timezone}/>
                    </div>
                    <div className="Calendar__date">
                        {curr_month}, {today}
                    </div>
                </div>
            </div> )
    }
}

export default Clothes;