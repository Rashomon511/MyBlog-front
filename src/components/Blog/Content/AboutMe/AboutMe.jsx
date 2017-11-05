import React from 'react';
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
                <div className={style.resumeWrap}>
                    <div className={style.resume}>
                        <p className={style.title}>AboutMe</p>
                        <hr/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutMe;