import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'john',
            age: 18
        }

    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

// export default;