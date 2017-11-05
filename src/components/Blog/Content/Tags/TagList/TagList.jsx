import React from 'react';
import style from './TagList.less';

class TagList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.tags}>
                <p className={style.title}>Tags</p>
                <hr/>
                <span>list</span>
            </div>
        )
    }
}

export default TagList;