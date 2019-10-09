import React, {Component} from 'react';

export class Game extends Component {

    state = {
        grid : {}
    };

    componentDidMount() {
        let gridSize = 10;
        let grid = [];
        for (let x = 0; x < gridSize; x++) {
            let col = [];
            for (let y = 0; y < gridSize; y++) {

                let obj = {
                    count : (x*gridSize)+y,
                    x,
                    y,
                    isMine : false,
                    value : -1,
                    opened : false
                };

                col.push(obj);
            }
            grid.push(col);
        }
        this.setState({grid});
    }

    render() {
        const {grid} = this.state;

        return (
            <div className='grid'>
                { grid.length > 0 ?
                    grid.map(column => {return(
                        <div className='column'>
                            {column.map(item => {return(
                                <div className='square'>

                                </div>
                            )})}
                        </div>
                    )}) : ''
                }
            </div>
        );
    }
}
