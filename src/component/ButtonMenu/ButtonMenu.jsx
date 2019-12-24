import React, {Component} from 'react';
import Button from "../Button/Button"

class ButtonMenu extends Component {
    render() {
        let active = this.props.active;
        let list = this.props.dayWeek.map((val, index) => {
            return <Button key={index} index={index} dayWeek={val[0].dayWeek} class={(index === active) ? 'button button__active' : 'button'} updateData={this.props.updateData}/>
        });
        return (
            <div className="ButtonMenu"> {list}</div>)
    }
}

export default ButtonMenu;