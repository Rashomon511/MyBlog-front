import React from 'react';
import PropType from 'prop-types';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="layout-copy">
                2017- &copy; Rashomon
            </div>
        )
    }
}

export default Footer;