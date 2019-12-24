import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }
    onChangeCity(e) {
        if (e.key === 'Enter') {
        this.props.updateData({city:  e.target.value});
        }
    }

    render() {
        return (
            <form className="Search" onSubmit={this.onSubmit}>
                <label>
                    <input className="Search__input" type="text" placeholder="Search the city.."
                           ref={(input) => this.input = input} onKeyPress={this.onChangeCity}/>
                </label>
                <input className="Search__submit" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Search;