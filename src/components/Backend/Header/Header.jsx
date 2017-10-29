import React from 'react';
import PropType from 'prop-types';
import style from './Header.less'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                2017- &copy; Rashomon
            </div>
        )
    }
}

export default Header;