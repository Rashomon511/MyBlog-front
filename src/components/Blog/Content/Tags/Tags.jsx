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
                <div className={style.tagWrap}>
                    <div className={style.tags}>
                        <p className={style.title}>Tags</p>
                        <hr/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Tags;