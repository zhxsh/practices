import React from 'react';
import '../assets/less/main.less';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'tom',
            age: 18
        }

    }

    render() {
        return (
            <div className="header">
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

// export default;