import React from 'react';
import style from './Tags.less';

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.tags}>
                <p className={style.title}>Tags</p>
                <hr/>

            </div>
        )
    }
}

export default Tags;