import React, { Component } from 'react';
import axios from 'axios';
import { store } from './redux/store';
import { updateDisplayedDate } from './redux/actions';
//base case: create a page showing Nov 2019
//each day is a list
class App extends Component {
    constructor() {
        super();
        this.state = {
            dates: [],
        };
    };

    componentDidMount() {
        axios.get('/api/october2019')
            .then(response => response.data)
            .then(data => this.setState({ dates: data }));
    }

    render() {
        const { dates } = this.state
        console.log(dates)
        return (
            <div>
                <h1>November 2019</h1>
                <ul>
                    {dates.map(date => {
                        return <li>
                            <div className="date">{date.date}
                                <button>Create</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}


export default App;