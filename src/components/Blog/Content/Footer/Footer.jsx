import React from 'react';
import PropType from 'prop-types';
import style from './Footer.less'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.layoutCopy}>
                <div className={style.layout}>2017- &copy; Rashomon</div>
            </div>
        )
    }
}

export default Footer;