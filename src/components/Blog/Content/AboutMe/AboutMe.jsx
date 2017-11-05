import React from 'react';
import style from './AboutMe.less';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.resume}>
                <p className={style.title}>AboutMe</p>
                <hr/>
            </div>
        )
    }
}

export default AboutMe;