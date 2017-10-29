import React from 'react';
import PropType from 'prop-types';
import {Button} from 'antd'
import style from './SideBar.less';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.avatar}>
                    <img/>
                </div>
                <div className={style.resume}>
                    名字
                </div>
                <div className={style.routeBtn}>
                    <Button>最新文章</Button>
                    <Button>标签</Button>
                    <Button>我的简历</Button>
                </div>
            </div>
        )
    }
}

export default SideBar;