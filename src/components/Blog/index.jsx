import React from 'react';
import SideBar from './SideBar/SideBar';
import style from './index.less';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}>
                <SideBar/>
                <div className={style.main}>{this.props.children}</div>
            </div>
        );
    }
}

export default Index;