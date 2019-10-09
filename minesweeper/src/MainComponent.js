import React, {Component} from 'react';
import {Game} from "./Game";

export class MainComponent extends Component {
    render() {
        return (
            <div className='main' >
                <Game />
            </div>
        );
    }
}
