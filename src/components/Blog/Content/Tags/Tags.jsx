import React from 'react';
import PropType from 'prop-types';
import style from './Tags.less';
import Footer from '../Footer/Footer';

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.tags}>tagsddddd</div>
                <Footer/>
            </div>
        )
    }
}

export default Tags;