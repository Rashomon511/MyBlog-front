import React from 'react';
import PropType from 'prop-types';
import style from './AboutMe.less';
import Footer from '../Footer/Footer';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.resume}>aboutMe</div>
                <Footer/>
            </div>
        )
    }
}

export default AboutMe;