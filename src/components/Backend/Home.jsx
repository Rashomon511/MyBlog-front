import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    static propTypes = {};

    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        return (
            <div>
                222ww22w
            </div>
        );
    }
}

export default Home;